"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import type { Metadata } from 'next'
import TournamentCard from "@/components/cards/TournamentCard";
import Pagination from "@/components/Common/Pagination";
import TournamentCardSkeleton from "@/components/cards/TournamentCardSkeleton";
import Filter from "@/components/inscription/Filter";



const TorneoPageComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tournaments, setTournaments] = useState([]);
  const [totalTournaments, setTotalTournaments] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const itemsPerPage = 10;

  async function fetchData(page: number, search: string) {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/tournaments?page=${page}&pageSize=${itemsPerPage}&searchTerm=${search.trim()}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setTournaments(data.tournaments);
      setTotalTournaments(data.totalCount);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData(1, searchTerm);
  };

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const goToPage = (currentPage: number) => setCurrentPage(currentPage);


  return (
    <>
      <Breadcrumb
        pageName="Torneos"
        description="Encuentra el mejor torneo que se adapte a ti"
      />
      <div className="container pb-5">
        <div className="bg-gray-100 min-h-screen">
          <div className="mx-auto">
            <Filter 
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              handleSearch={handleSearch}
            />
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
                {[1, 2, 3, 4, 5, 6].map((item: number) => (
                  <div key={item} className="rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <TournamentCardSkeleton />
                  </div>
                ))}
              </div>
            )
              : !loading && !totalTournaments ? (
                <p className="text-center">No se encontraron resultados.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
                  {tournaments.map((tournament: any) => (
                    <div key={tournament.id} className="rounded-lg shadow-md transition-transform transform hover:scale-105">
                      <TournamentCard tournament={tournament} />
                    </div>
                  ))}
                </div>
              )}

            {totalTournaments > itemsPerPage && (
              <Pagination
                page={currentPage}
                itemsPerPage={itemsPerPage}
                totalCount={totalTournaments}
                goToNextPage={paginateFront}
                goToPreviousPage={paginateBack}
                goToPage={goToPage}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default TorneoPageComponent;
