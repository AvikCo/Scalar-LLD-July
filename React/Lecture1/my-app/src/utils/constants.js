

const userTypes={
    customer:"CUSTOMER",
    admin:"ADMIN"
}


const roles = {
    onlyCustomer : [userTypes.customer],
    onlyAdmin: [userTypes.admin],
    bothCustomerAndAdmin : [userTypes.admin, userTypes.customer]
}




export default {userTypes, roles};

