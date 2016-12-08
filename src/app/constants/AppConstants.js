export let AppConstants = {

    ACTION:{
        TODO:{

            SAVE_REQUEST_PENDING:"save_request_pending",
            SAVE_REQUEST_SUCCESS:"save_request_success",
            SAVE_REQUEST_ERROR:"save_request_error",

            GET_ALL_REQUEST_PENDING:"get_all_request_pending",
            GET_ALL_REQUEST_SUCCESS:"get_all_request_success",
            GET_ALL_REQUEST_ERROR:"get_all_request_error",

            GET_BY_ID_REQUEST_PENDING:"get_by_id_request_pending",
            GET_BY_ID_REQUEST_SUCCESS:"get_by_id_request_success",
            GET_BY_ID_REQUEST_ERROR:"get_by_id_request_error",


            UPDATE_REQUEST_PENDING:"update_request_pending",
            UPDATE_REQUEST_SUCCESS:"update_request_success",
            UPDATE_REQUEST_ERROR:"update_request_error",

            DELETE_REQUEST_PENDING:"delete_request_pending",
            DELETE_REQUEST_SUCCESS:"delete_request_success",
            DELETE_REQUEST_ERROR:"delete_request_error",


            REQUEST_CLOSE_SNACK_BAR:"request_close_snack_bar"
        }

    },
    ROUTER:{
        ADD_VIEW:"/todo/add",
        MAIN_VIEW:"/todo"
    }
};