import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../auth";
import { setState } from "../slice/miscSlice";

// Helper function to create query with common behavior
const createMiscQuery = (endpoint, tag) => ({
  query: () => `api/misc/${endpoint}`,
  providesTags: [tag],
  async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    try {
      const { data } = await queryFulfilled;
      // console.log({data, tag});
      dispatch(
        setState({
          key: tag,
          value: data,
        })
      );
    } catch (err) {
      console.error(`${endpoint} query failed:`, err);
    }
  },
});

// Create the API
export const miscApi = createApi({
  reducerPath: "miscApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getMiscInstructors: builder.query(
      createMiscQuery("instructors", "instructors")
    ),
    getMiscCourses: builder.query(createMiscQuery("courses", "courses")),
    getMiscGraduates: builder.query(createMiscQuery("graduates", "graduates")),
    getMiscEvents: builder.query(createMiscQuery("events", "events")),
    getMiscVacancies: builder.query(createMiscQuery("vacancies", "vacancies")),
    getMiscPartners: builder.query(createMiscQuery("partners", "partners")),
    getMiscMostViewedBlogs: builder.query(createMiscQuery("blogs/most-viewed", "blogs/most-viewed")),
    getMiscBlogs: builder.query({
      query: ({ currentPage = 1, category = "" }) => ({
        url: "api/misc/blogs",
        params: {
          page: currentPage,
          limit: 12,
          category: category,
        },
      }),
      providesTags: ["blogs"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setState({
              key: "blogs",
              value: data,
            })
          );
        } catch (err) {
          console.error(`blogs query failed:`, err);
        }
      },
    }),
    getMiscBlogsById: builder.query({
      query: (ids) => ({
        url: `api/misc/blogs/getBlogsByIds`,
        body: Array.isArray(ids) ? ids : [ids],
        method: "POST",
      }),
      providesTags: ["blog"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setState({
              key: "blog",
              value: data,
            })
          );
        } catch (err) {
          console.error(`blog query failed:`, err);
        }
      },
    }),
    getMiscDiploma: builder.query({
      query: (id) => `api/misc/diplomas/${id}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setState({
              key: "diploma",
              value: data,
            })
          );
        } catch (err) {
          console.error(`diplomas query failed:`, err);
        }
      },
    }),
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: 5,
});

export const {
  useGetMiscInstructorsQuery,
  useGetMiscCoursesQuery,
  useGetMiscGraduatesQuery,
  useGetMiscEventsQuery,
  useGetMiscVacanciesQuery,
  useGetMiscPartnersQuery,
  useGetMiscDiplomaQuery,
  useGetMiscBlogsQuery,
  useGetMiscBlogsByIdQuery,
  useGetMiscMostViewedBlogsQuery,
} = miscApi;
