
export const getHeader = () => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    return header
}