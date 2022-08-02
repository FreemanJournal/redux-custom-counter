import Swal from "sweetalert2"
import { edit } from "../../redux/state/todo/todo.slice"
import store from "../../redux/store/store"
export const editHandler = async (i, item) => {
    const { value: text } = await Swal.fire({
        input: 'textarea',
        inputValue: item,
        inputLabel: 'Message',
        inputPlaceholder: item,
        inputAttributes: {
            'aria-label': 'Type your message here'
        },
        showCancelButton: true
    })

    if (text) {
        store.dispatch(edit({ index: i, task: text }))
    }
}