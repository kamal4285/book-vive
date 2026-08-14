import { Component } from "react";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import { createBrowserRouter} from "react-router";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: '/books',
        Component: Books
      },
      {
        path: '/bookDetails/:bookId',
        Component: BookDetails,
        loader: () => fetch('/booksData.json')
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
]);