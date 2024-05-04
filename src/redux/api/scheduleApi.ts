import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseAPi } from "./baseApi";

export const scheduleApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
    getAllSchedule: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          doctor: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),
    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllScheduleQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
