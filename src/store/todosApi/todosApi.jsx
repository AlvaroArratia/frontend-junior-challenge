import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TODOS_APP_API_URL = process.env.REACT_APP_API_LOCAL_SERVER

export const apiTodos = createApi({
    reducerPath: 'apiTodosPath',
    baseQuery: fetchBaseQuery({ baseUrl: TODOS_APP_API_URL }),
    tagTypes: ['listTodos'],

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ('/todos'),
            providesTags: ['listTodos']
        }),

        postTodo: builder.mutation({
            query: (newTodo) => ({
                url: '/todos/',
                method: 'POST',
                body: { ...newTodo}
            }),
            invalidatesTags: ['listTodos']
        }),

        updateTodo: builder.mutation({
            query: (updateTodo) => ({
                url: '/todos/' + updateTodo.id,
                method: 'PUT',
                body: updateTodo
            }),
            invalidatesTags: ['listTodos']
        }),

        deleteTodo: builder.mutation({
            query: (idTodo) => ({
                url: '/todos/' + idTodo,
                method: 'DELETE'
            }),
            invalidatesTags: ['listTodos']
        })

    })

})


export const { useLazyGetTodosQuery, usePostTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiTodos