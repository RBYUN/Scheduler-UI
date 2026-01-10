import React from "react";

export default function isAuthenticated() {

    const getAccessToken = () => Cookies.get('access_token');
    const getRefreshToken = () => Cookies.get('refresh_token');

    if (getRefreshToken()) {
        return false
    }

    if (!!getRefreshToken()) {
        try {
            const isAuthenticatedResponse = await fetch(
                "http://localhost:3000/accounts/authenticate", {
                    method: "Get",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: {
                        "refreshToken": getRefreshToken
                    }
                });
        } catch(err) {
            console.error("error in authenticating with access token")
        }
    }/* if there is no refresh token, generate one after login. It will be a jwt then send jwt to database where it will store it and then create an access token and send
    it back. then the page will refresh and you will be logged in
    maybe use UseEffect for login and change dpeendency array of access token? 
    
    
    Plan:
    call cookies.get(access token) and cookies.get(refresh token)
    If there are cookies, then we are authenticated. 
    More specifically, refresh_token means we are authenticated.
    access_token is for any commands during the hour/session. When it expires, it will get deleted and we need to run another api call to get a new access token. 
    how do we keep track of the deletion? check timestamp with expiration time for access_token.
    Access_token should be checked in every single api call. If it does not exist, then run the generate_new access token function. (this assumes that refresh token exists)
    if refresh token doesn't exist, then you need to log them out.

    cases:
    1.) logging in.
    If you log in, you will run the command to generate a refresh token and then be redirected to the home page.
    refresh token and access token will be saved in your browser cookies.
    
    2.) already logged in and you visit the site
    Check for refresh token and access token. If access token does not exist but refresh does, then you will need to generate a new one with the generate_new function
    if access token does exist, then you are good.

    3.) every single time you visit a protected page, you will be using your access token and if it does not exist, run the generate new function.
    this also means that every protected page will be checking for your access token.

    generate new function will create an access token and save it in the cookies. Save refresh token and access token in the context in App.jsx so that it can be 
    retrieved by any of the children. If access token authentication fails, try creating a new one with refresh token. If refresh token fails, then log out.
    starting from the home page, if isAuthenticated, then navigate to dashboard/ else navigate to home
    for every page, it will check for the refresh token up top and then validate it by hitting access_token check api.

    backend api requires
    generate access token api (call api with refresh token. it will validate refresh token in auth.validate and return an access token)
    generate refresh token api (call api with user login. If refresh_token doesn't exist, then you should be in home page.)
    authenticate access_token api (call api with access_token and determine if it matches. )

    Make sure cookies are saved with HttpOnly or Secure flags and with sameSite=lax.
    Don't save the tokens in context because then if an attack does inject malicious scripts, they can run javascript and steal tokens.

    run a setTimeout() to generate a new access token right before it expires.

    refresh tokens can be saved in an sql table with uuid, token, expiry date.
    access tokens can be jwts that my backend verifies.

    use a protectedroute wrapper component so it will look like this:
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
        </Route>
    </Routes>

            import { Outlet, Navigate } from "react-router-dom";
            import { useAuth } from "./useAuth";

            export default function ProtectedRoute() {
            const { accessToken, loading } = useAuth();

            if (loading) return <div>Loading...</div>;
            if (!accessToken) return <Navigate to="/login" replace />;

            return <Outlet />;  // renders child routes
            }
    */
    
}