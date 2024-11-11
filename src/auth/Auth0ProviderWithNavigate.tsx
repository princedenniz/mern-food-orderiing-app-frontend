import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({children}: Props) => {
    const navigate = useNavigate()

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUrl = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

    // console.log(domain)
    // console.log(clientId)
    // console.log(redirectUrl)

    if(!domain || !clientId || !redirectUrl || !audience){
        throw new Error("unable to initialise auth");
    }

    const onRedirectCallBack = ()=>{
       navigate("/auth-callback");
    }


  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{redirect_uri: redirectUrl}} onRedirectCallback={onRedirectCallBack}>
        {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate