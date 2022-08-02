import Swal from "sweetalert2"
import { remove } from "../../redux/state/todo/todo.slice"
import store from "../../redux/store/store"
export const deleteHandler = (i) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'inline-block px-3 py-3  text-sm font-medium text-white transition bg-red-500 rounded hover:bg-red-400 hover:shadow-xl active:bg-red-500 focus:outline-none focus:ring-0',
            cancelButton: 'inline-block px-3 py-3 mx-3   text-sm font-medium text-white transition bg-emerald-500 rounded hover:bg-emerald-400 hover:shadow-xl active:bg-emerald-500 focus:outline-none focus:ring-0'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            store.dispatch(remove(i))


        }
    })

}