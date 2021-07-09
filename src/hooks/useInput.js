import { useState } from "react"

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const handleValue = (event) => {
        setValue(event.target.value)
    }
    return [value, handleValue]
}

export default useInput