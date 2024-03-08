class Api::V1::BooksController < ApplicationController
    def search
        @all_books = RakutenWebService::Books::Book.search(booksGenreId: "001005005")
         render json: { status: 'success', data: @all_books }  
    end
end
