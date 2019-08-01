// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import Dashboard from "./views/dashboard";
import { PostList, PostCreate, PostEdit } from './views/posts';
import { UserList, UserIcon, UserEdit } from './views/users';

const App = () => (
    <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}
    	   dashboard={Dashboard}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} />
    </Admin>
);

export default App;