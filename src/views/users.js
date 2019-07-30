import React from 'react';
import { List, Datagrid, EmailField, Edit, SimpleForm, TextField, DisabledInput, TextInput } from 'admin-on-rest';
import UsersIcon from 'material-ui/svg-icons/social/group';
export const UserIcon = UsersIcon;

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="website" />
        </SimpleForm>
    </Edit>
);