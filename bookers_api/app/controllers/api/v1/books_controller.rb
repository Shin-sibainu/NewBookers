class Api::V1::BooksController < ApplicationController
    def search
        @all_books = RakutenWebService::Books::Book.search(booksGenreId: "001005005")
         render json: { status: 'success', data: @all_books }  
    end



    def base
        @books = []
        @books.push(RakutenWebService::Books::Book.search(title: "入門 HTML"))
        @books.push(RakutenWebService::Books::Book.search(title: "入門 CSS"))
        @books.push(RakutenWebService::Books::Book.search(title: "入門 Ruby"))
        @books.push(RakutenWebService::Books::Book.search(title: "入門 Python"))
        @books.push(RakutenWebService::Books::Book.search(title: "入門 Java"))
        @books.push(RakutenWebService::Books::Book.search(title: "入門 JavaScript"))
        @books.push(RakutenWebService::Books::Book.search(title: "入門 AWS"))
        render json: { status: 'base', data: @books }
    end

    private


end
