import React from 'react'

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>th info is {props.info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is admin</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>need to login</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)
export default AuthInfo;