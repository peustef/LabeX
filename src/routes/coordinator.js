export const goToListTrips = (history) => {
    history.push('/trips/list')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToAdminHome = (history) => {
    history.push('/admin/trips/list')
}

export const goToApplicationForm = (history) => {
    history.push('/trips/application')
}

export const goToCreateTrip = (history) => {
    history.push('/admin/trips/create')
}

export const goToHome = (history) => {
    history.push('/')
}

export const goToTripDetails = (history, id) => {
    history.push(`/admin/trips/${id}`)
}

export const goBack = (history) => {
    history.goBack()
}