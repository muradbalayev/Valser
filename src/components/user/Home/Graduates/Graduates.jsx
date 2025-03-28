// import graduates from '../../../../datas/graduatesDatas';
import { useState, useCallback } from 'react';
import GraduateModal from './GraduateModal';
import useMisc from '@/hooks/useMisc';

const GraduateCard = ({ graduate, onClick }) => {

  const imgUrl = `${import.meta.env.VITE_API_GLOBAL_URL}/public/uploads/graduates`;

  return (
    <div 
      onClick={onClick}
      className="cursor-pointer"
    >
      <div   
        className="relative group p-3 bg-white hover:shadow-lg dark:hover:bg-gray-700 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative mb-2">
          <div className="w-20 h-20 mx-auto ring-2 ring-gray-50 dark:ring-gray-700 rounded-full overflow-hidden">
            <img
              alt={graduate.firstName}
              src={`${imgUrl}/${graduate.imageUrl}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h3 className="text-base font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
            {graduate.firstName} {graduate.secondName}
          </h3>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 line-clamp-1">
            {graduate.employer}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-1">
            {graduate.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Graduates() {
  const { graduates } = useMisc();
  // console.log(graduates);
  const [selectedGraduate, setSelectedGraduate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((graduate) => {
    setSelectedGraduate(graduate);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedGraduate(null);
  }, []);

  const displayedGraduates = graduates.slice(0, 12);

  return (
    <section id='graduates' className="py-20">
      <div className="container flex flex-col mx-auto px-4">
        <h2 className="title min-380:block hidden font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in">
          #MəzunlarımızlaTanışOl
        </h2>
        <h2 className="title min-380:hidden block font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in">
          #MəzunlarımızıTanı
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-4 gap-2 sm:px-2  animate-fade-in">
          {displayedGraduates.map((graduate) => (
            <GraduateCard
              key={graduate._id}
              graduate={graduate}
              onClick={() => openModal(graduate)}
            />
          ))}
        </div>

        <GraduateModal
          graduate={selectedGraduate}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
}
