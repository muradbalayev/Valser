const GraduateModal = ({ graduate, isOpen, onClose }) => {
  if (!isOpen) return null;
  const imgUrl = `${import.meta.env.VITE_API_GLOBAL_URL}/public/uploads/graduates`;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative flex flex-col justify-center bg-white dark:bg-gray-800 rounded-lg w-[90%] max-w-[425px] p-6 shadow-xl">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {graduate?.firstName} {graduate?.secondName}
          </h3>
          <p className="text-blue-600 dark:text-blue-400">
            {graduate?.employer}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 ring-2 ring-gray-200 dark:ring-gray-700 rounded-full overflow-hidden">
              <img
                src={`${imgUrl}/${graduate?.imageUrl}`}
                alt={graduate?.firstName}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              {graduate?.title}
            </p>
            
            <blockquote className="text-gray-700 dark:text-gray-300 text-center italic border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              {graduate?.comment}
            </blockquote>
          </div>
        </div>

        <a
        href={graduate.socialMedia} target="_blank"
          // onClick={() => window.open(graduate?.socialMedia, '_blank')}
          className="mt-6 w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200"
        >
          LinkedIn Profilinə Keç
        </a>
      </div>
    </div>
  );
};

export default GraduateModal;
