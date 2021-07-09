import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHome from "../pages/AdminHomePage";
import ApplicationForm from "../pages/ApplicationFormPage";
import CreateTrip from "../pages/CreateTripPage";
import Home from "../pages/HomePage";
import ListTrips from "../pages/ListTripsPage";
import Login from "../pages/LoginPage";
import TripDetails from "../pages/TripDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/trips/list'>
                    <ListTrips />
                </Route>

                <Route exact path='/trips/application/'>
                    <ApplicationForm />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/admin/trips/list'>
                    <AdminHome />
                </Route>

                <Route exact path='/admin/trips/create'>
                    <CreateTrip />
                </Route>

                <Route exact path='/admin/trips/:id'>
                    <TripDetails />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

export default Router;