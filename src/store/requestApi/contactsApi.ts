import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact, ContactsList, DeleteContact } from "../../models/models";

const YOUR_API_KEY = "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1",
  }),
  tagTypes: ["Contacts", "ContactInfo"],
  endpoints: (build) => ({
    getAllContacts: build.query<Contact[], void>({
      query: () => ({
        url: "/contacts",
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
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
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
      }),
      providesTags: ["ContactInfo"],
      transformResponse: (responce: ContactsList) => responce.resources[0],
    }),

    createNewContact: build.mutation<Contact, Contact>({
      query(contactData) {
        return {
          url: `/contact`,
          method: "POST",
          body: contactData,
          headers: {
            Authorization: `Bearer ${YOUR_API_KEY}`,
            "Content-type": "application/json",
          },
        };
      },
    }),

    addNewContactTags: build.mutation<Contact, any>({
      query(contactProps) {
        console.log(contactProps);
        return {
          url: `/contacts/${contactProps.id}/tags`,
          method: "PUT",
          body: { tags: contactProps.tags },
          headers: {
            Authorization: `Bearer ${YOUR_API_KEY}`,
            "Content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["ContactInfo"],
    }),

    deleteSelectedContact: build.mutation<DeleteContact, string>({
      query: (contactId) => ({
        url: `contact/${contactId}`,
        headers: {
          Authorization: `Bearer ${YOUR_API_KEY}`,
        },
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
} = contactsApi;
