import { tagTypes } from "../tag-types";
import { baseAPi } from "./baseApi";

const doctorApi = baseAPi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const { useCreateDoctorMutation } = doctorApi;
