// import { useState } from "react";
// import { Eye, Search, RefreshCw, Calendar } from "lucide-react";
// import Loading from "@/hooks/Loading";
// import Error from "@/hooks/Error";
// import { useGetCourseAppliesQuery, useGetVacancyAppliesQuery } from "@/redux/services/extraApi";

// function AdminAppliesPage() {
//     const [showVacancies, setShowVacancies] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     console.log(currentPage);
//     const [applicationType, setApplicationType] = useState("individual");
//     const {
//         data: courses,
//         isLoading: isCoursesLoading,
//         isError: isCoursesError,
//         error: coursesError,
//         isFetching: isCoursesFetching
//     } = useGetCourseAppliesQuery({currentPage , applicationType}, {
//         skip: showVacancies
//     });

//     const {
//         data: vacancies,
//         isLoading: isVacanciesLoading,
//         isError: isVacanciesError,
//         error: vacanciesError,
//         isFetching: isVacanciesFetching
//     } = useGetVacancyAppliesQuery(currentPage, {
//         skip: !showVacancies
//     });

//     console.log(courses);
//     const [selectedCategory, setSelectedCategory] = useState(null);

//     const [dateFilter, setDateFilter] = useState({ start: null, end: null });
//     const [showDatePicker, setShowDatePicker] = useState(false);

//     // Tarix filter funksiyası
//     const filterByDate = (app) => {
//         if (!dateFilter.start && !dateFilter.end) return true;

//         const appDate = new Date(app.createdAt);
//         const start = dateFilter.start ? new Date(dateFilter.start) : null;
//         const end = dateFilter.end ? new Date(dateFilter.end) : null;

//         // Tarix aralığı üçün yoxlama
//         let valid = true;
//         if (start) valid = valid && appDate >= start;
//         if (end) valid = valid && appDate <= new Date(end.setHours(23, 59, 59, 999));

//         return valid;
//     };

//     const clearDateFilter = () => {
//         setDateFilter({ start: null, end: null });
//         setShowDatePicker(false);
//     };


//     const courseOptions = [
//         { value: "frontend", label: "Front-End Development" },
//         { value: "backend", label: "Back-End Development" },
//         { value: "data", label: "Data Analitika" },
//         { value: "design", label: "Qrafik və Motion Dizayn" },
//         { value: "marketing", label: "Rəqəmsal Marketinq" },
//         { value: "other", label: "Digər" },
//     ];


//     const getPaginationRange = () => {
//         const activeData = showVacancies ? vacancies : courses;

//         if (!activeData?.totalPages) return [];



//         const range = [];
//         const showPages = 3;
//         const totalPages = activeData?.totalPages;
//         let start = Math.max(1, currentPage - Math.floor(showPages / 2));
//         let end = Math.min(totalPages, start + showPages - 1);

//         if (end - start + 1 < showPages) {
//             start = Math.max(1, end - showPages + 1);
//         }

//         if (start > 1) {
//             range.push(1);
//             if (start > 2) range.push('...');
//         }

//         for (let i = start; i <= end; i++) {
//             range.push(i);
//         }

//         if (end < totalPages) {
//             if (end < totalPages - 1) range.push('...');
//             range.push(totalPages);
//         }

//         return range;
//     };


//     const handlePreviewCV = (url) => {
//         window.open(`${import.meta.env.VITE_API_GLOBAL_URL}/public/uploads/resumes/${url}`, '_blank');
//     };

//     const applicationsToDisplay = showVacancies
//         ? vacancies?.vacancyApplications
//         : courses?.courseApplications;

//     const filteredApplications = applicationsToDisplay?.filter(app => {
//         const categoryMatch = showVacancies 
//         ? true 
//         : (
//           !selectedCategory || 
//           app.applicationCategory === selectedCategory
//         );

//         const searchMatch = app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         app.phoneNumber.includes(searchQuery);

//         return categoryMatch && searchMatch && filterByDate(app) ;
//     }) || [];

//     const isFetching = showVacancies ? isVacanciesFetching : isCoursesFetching;
//     const totalPages = showVacancies ? vacancies?.totalPages : courses?.totalPages;


//     if (isCoursesLoading || isVacanciesLoading) return <Loading />;
//     if (isCoursesError || isVacanciesError) return <Error message={coursesError?.message || vacanciesError?.message} />;


//     const renderDatePicker = () => (
//         <div className="absolute right-40 top-12 bg-white border rounded-lg shadow-lg p-4 z-10">
//             <div className="flex gap-4 items-center mb-4">
//                 <div>
//                     <label className="block text-sm font-medium mb-1">Başlanğıc</label>
//                     <input
//                         type="date"
//                         value={dateFilter.start || ''}
//                         onChange={(e) => setDateFilter(prev => ({
//                             ...prev,
//                             start: e.target.value
//                         }))}
//                         className="p-2 border rounded-md"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium mb-1">Son</label>
//                     <input
//                         type="date"
//                         value={dateFilter.end || ''}
//                         onChange={(e) => setDateFilter(prev => ({
//                             ...prev,
//                             end: e.target.value
//                         }))}
//                         className="p-2 border rounded-md"
//                     />
//                 </div>
//             </div>
//             <div className="flex justify-end gap-2">
//                 <button
//                     onClick={clearDateFilter}
//                     className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded"
//                 >
//                     Təmizlə
//                 </button>
//                 <button
//                     onClick={() => setShowDatePicker(false)}
//                     className="px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded"
//                 >
//                     Bağla
//                 </button>
//             </div>
//         </div>
//     );

//     return (
//         <div className="wrapper relative flex flex-col items-center gap-5 p-8">
//             <div className="flex justify-between w-full items-center">
//                 <div className="flex items-center gap-4">
//                     <h1 className="text-[32px] font-bold text-black">
//                         {showVacancies ? 'Vacancy Applications' : 'Course Applications'}
//                     </h1>
//                     <div className="flex items-center gap-2">
//                         <button
//                             onClick={() => setShowVacancies(!showVacancies)}
//                             className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none
//                                 ${showVacancies ? 'bg-[#214440]' : 'bg-gray-200'}`}
//                         >
//                             <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
//                                 ${showVacancies ? 'translate-x-6' : 'translate-x-1'}`}
//                             />
//                         </button>
//                         <span className="text-sm text-gray-600 font-medium">
//                             {showVacancies ? 'Vacancies' : 'Courses'}
//                         </span>
//                     </div>
//                     {!showVacancies && (
//                         <div className="relative">
//                             <select
//                                 value={selectedCategory || ''}
//                                 onChange={(e) => setSelectedCategory(e.target.value || null)}
//                                 className="p-2 pr-8 border rounded-md appearance-none bg-white"
//                             >
//                                 <option value="">Bütün Kateqoriyalar</option>
//                                 {courseOptions.map(option => (
//                                     <option key={option.value} value={option.value}>
//                                         {option.label}
//                                     </option>
//                                 ))}
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>
//                         </div>
//                     )}
                    
//                     {/* Application Type Filter */}
//                     {!showVacancies && (
//                         <div className="flex items-center gap-2 ml-4">
//                             <span className="text-sm text-gray-600 font-medium">
//                                 {applicationType === "individual" ? 'Fərdi' : 'Korporativ'}
//                             </span>
//                             <button
//                                 onClick={() => setApplicationType(applicationType === "individual" ? "corporate" : "individual")}
//                                 className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none
//                                     ${applicationType === "corporate" ? 'bg-[#214440]' : 'bg-gray-200'}`}
//                             >
//                                 <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
//                                     ${applicationType === "corporate" ? 'translate-x-6' : 'translate-x-1'}`}
//                                 />
//                             </button>
//                         </div>
//                     )}
//                 </div>
//                 <div className="flex items-center gap-4 relative">

//                     <button
//                         onClick={() => setShowDatePicker(!showDatePicker)}
//                         className={`p-2 rounded-md border ${dateFilter.start || dateFilter.end
//                             ? 'bg-blue-100 border-blue-300'
//                             : 'bg-gray-50 border-gray-200'
//                             }`}
//                     >
//                         <Calendar className={`${dateFilter.start || dateFilter.end
//                             ? 'text-blue-600'
//                             : 'text-gray-400'
//                             }`} />
//                     </button>
//                     {showDatePicker && renderDatePicker()}
//                     <div className="flex relative">
//                         <input
//                             className="form-control font-semibold md:w-80 sm:w-40 w-32 p-2 border outline-none rounded-md"
//                             placeholder="Search applications..."
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                         <Search className="absolute right-2 top-2.5 text-gray-400" size={20} />
//                     </div>
//                 </div>

//             </div>
//             {dateFilter.start || dateFilter.end ? (
//                 <div className="w-full flex items-center justify-between px-2">
//                     <span className="text-sm text-gray-600">
//                         Filter: {dateFilter.start} - {dateFilter.end}
//                     </span>
//                     <button
//                         onClick={clearDateFilter}
//                         className="text-red-600 hover:text-red-700 text-sm flex items-center gap-1"
//                     >
//                         <RefreshCw size={14} />
//                         Filteri təmizlə
//                     </button>
//                 </div>
//             ) : null}

//             {!filteredApplications.length ? (
//                 <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
//                     <RefreshCw size={64} className="text-gray-400" />
//                     <h2 className="text-2xl font-semibold text-gray-600">
//                         No Applications Found
//                     </h2>
//                     <p className="text-gray-500">
//                         {searchQuery ? "No applications match your search" : "No applications submitted yet"}
//                     </p>
//                 </div>
//             ) : (
//                 <div className="w-full overflow-x-auto">
//                     <table className="w-full">
//                         <thead className="bg-[#214440] text-white">
//                             <tr>
//                                 <th className="p-3">#</th>
//                                 <th className="p-3">Full Name</th>
//                                 <th className="p-3">Email</th>
//                                 <th className="p-3">Phone</th>
//                                 <th className="p-3">Category</th>
//                                 {!showVacancies && <th className="p-3">Type</th>}
//                                 {(!showVacancies && applicationType === "corporate") && <th className="p-3">Company</th>}
//                                 <th className="p-3">Applied At</th>
//                                 {showVacancies && <th className="p-3">CV</th>}
//                                 <th className="p-3">Bitrix</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredApplications.map((app, index) => (
//                                 <tr key={app._id} className="border-b hover:bg-gray-50">
//                                     <td className="p-3 text-center">{index + 1}</td>
//                                     <td className="p-3">{app.fullName}</td>
//                                     <td className="p-3">{app.email}</td>
//                                     <td className="p-3">{app.phoneNumber}</td>
//                                     <td className="p-3">{app.applicationCategory}</td>
//                                     {!showVacancies && <td className="p-3">{app.applicationType}</td>}
//                                     {(!showVacancies && app.applicationType === "corporate") && <td className="p-3">{app.representedInstitution}</td>}
//                                     <td className="p-3">
//                                         {new Date(app.createdAt).toLocaleDateString()}
//                                     </td>
//                                     {showVacancies && (
//                                         <td className="p-3 text-center">
//                                             {app.resumeUrl && (
//                                                 <button
//                                                     onClick={() => handlePreviewCV(app.resumeUrl)}
//                                                     className="text-blue-600 mx-auto font-semibold flex justify-center items-center gap-1"
//                                                 >
//                                                     <Eye size={18} className="inline mr-1" />
//                                                     View CV
//                                                 </button>
//                                             )}
//                                         </td>
//                                     )}
//                                     <td className="p-3 text-center">
//                                         <span className={`px-2 py-1 rounded-full text-sm 
//                                             ${app.sendedToBitrix ? 'bg-green-100 text-green-800' : 'bg-red-100 text-yellow-800'}`}>
//                                             {app.sendedToBitrix ? 'True' : 'False'}
//                                         </span>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//             {totalPages > 1 &&
//                 <div className="flex justify-center items-center gap-2 mt-4">
//                     <button
//                         className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
//                         onClick={() => setCurrentPage(1)}
//                         disabled={currentPage === 1 || isFetching}
//                     >
//                         First
//                     </button>
//                     <button
//                         className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
//                         onClick={() => setCurrentPage((prev) => prev - 1)}
//                         disabled={currentPage === 1 || isFetching}
//                     >
//                         Prev
//                     </button>

//                     {getPaginationRange().map((page, index) => (
//                         <button
//                             key={index}
//                             className={`px-3 py-1 rounded 
//                             ${page === currentPage
//                                     ? "bg-blue-600 text-white"
//                                     : page === "..." || isFetching
//                                         ? ""
//                                         : "bg-gray-200 hover:bg-gray-300"
//                                 }`}
//                             onClick={() => typeof page === 'number' && setCurrentPage(page)}
//                             disabled={page === "..." || isFetching}
//                         >
//                             {page}
//                         </button>
//                     ))}

//                     <button
//                         className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
//                         onClick={() => setCurrentPage((prev) => prev + 1)}
//                         disabled={currentPage >= totalPages || isFetching}
//                     >
//                         Next
//                     </button>
//                     <button
//                         className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
//                         onClick={() => setCurrentPage(totalPages || 1)}
//                         disabled={currentPage >= (totalPages || 0) || isFetching}
//                     >
//                         Last
//                     </button>
//                 </div>
//             }
//         </div>
//     );
// }

// export default AdminAppliesPage;