import axios from 'axios'


const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })


export const findClient = async (name: string) => {
    try {
        const { data } = await api.post("/clients/find-client", {
            name
        })
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}

export const registerClient = async (name: string) => {
    try {
        const { data } = await api.post("/clients/register-client", {
            name
        })
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}


interface RegisterContainerProps {
    client: string
    client_id: number
    number: string
    type: string
    status: string
    category: string


}
export const registerContainer = async ({ client, client_id, number, type, status, category }: RegisterContainerProps) => {
    try {
        const { data } = await api.post("/containers/register-container", {
            client, client_id, number, type, status, category
        })
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}
interface FindContainerProps {

    number: string


}

export const findContainer = async ({ number }: FindContainerProps) => {
    try {
        const { data } = await api.post("/containers/find-container", {
            number
        })
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}


interface RegisterMovimentationProps {
    container_id: number
    number: string
    type: string
    date_start: any
    date_end: any


}
export const registerMovimentation = async ({ container_id, number, type, date_start, date_end }: RegisterMovimentationProps) => {
    try {
        const { data } = await api.post("/movimentations/register-movimentation", {
            container_id, number, type, date_start, date_end
        })
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}

interface GenerateRelatoriesClientProps {
    client_id: number
    category: string



}
export const generateRelatoriesClient = async ({ client_id, category }: GenerateRelatoriesClientProps) => {
    try {
        const { data } = await api.post("/relatories/generate-relatories-client", {
            client_id, category
        })
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}

export const generateRelatoriesTotal = async () => {
    try {
        const { data } = await api.post("/relatories/generate-relatories-total")
        return data
    } catch (error: any) {
        console.log(error)
        const { data } = error.response
        if (data) {
            return data
        } else {
            return null
        }
    }
}
