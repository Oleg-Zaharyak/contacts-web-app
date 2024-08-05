import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Contact,
  ContactsList,
  DeleteContact,
  Fields,
} from "../../models/models";

const YOUR_API_KEY = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${YOUR_API_KEY}`);
      return headers;
    },
  }),

  tagTypes: ["Contacts", "ContactInfo"],
  endpoints: (build) => ({
    getAllContacts: build.query<Contact[], void>({
      query: () => ({
        url: "/contacts",
        params: {
          sort: "created:desc",
        },
      }),
      providesTags: ["Contacts"],
      transformResponse: (responce: ContactsList) => responce.resources,
    }),

    getSelectedContact: build.query<Contact, string>({
      query: (contactId) => ({
        url: `/contact/${contactId}`,
      }),
      providesTags: ["ContactInfo"],
      transformResponse: (responce: ContactsList) => responce.resources[0],
    }),

    createNewContact: build.mutation<Contact, Fields>({
      query(fields) {
        const body = {
          fields,
          owner_id: null,
          privacy: {
            edit: null,
            read: null,
          },
          record_type: "person",
        };
        return {
          url: `/contact`,
          method: "POST",
          body,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["Contacts"],
    }),

    addNewContactTags: build.mutation<Contact, { id: string; tags: string[] }>({
      query(contactProps) {
        console.log(contactProps);
        return {
          url: `/contacts/${contactProps.id}/tags`,
          method: "PUT",
          body: { tags: contactProps.tags },
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["ContactInfo"],
    }),

    deleteSelectedContact: build.mutation<DeleteContact, string>({
      query: (contactId) => ({
        url: `contact/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetSelectedContactQuery,
  useDeleteSelectedContactMutation,
  useAddNewContactTagsMutation,
  useCreateNewContactMutation,
} = contactsApi;
