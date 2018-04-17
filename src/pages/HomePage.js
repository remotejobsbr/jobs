import React from 'react'
import { Link } from 'react-router-dom'

import {
  List,
  ListItem,
  Divider,
  Subheader,
  Avatar
} from 'material-ui'

import { blue500, orange500 } from 'material-ui/styles/colors'
import FolderIcon from '@material-ui/icons/Folder'

import { title } from './styles/HomePage.style'

const HomePage = () => (
  <div>
    <h1 className={title}>Remote Job BR</h1>

    <List>
      <Subheader inset>Vagas de Front-End</Subheader>
      <Link to='/jobs/frontend/frontendbr'>
        <ListItem
          leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={blue500} />}
          primaryText='Front-End Brasil'
          secondaryText='Vagas do Repositório'
        />
      </Link>
      <Link to='/jobs/frontend/reactbrasil'>
        <ListItem
          leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={blue500} />}
          primaryText='React Brasil'
          secondaryText='Vagas do Repositório'
        />
      </Link>

      <Divider />

      <Subheader inset>Vagas de Back-End</Subheader>
      <Link to='/jobs/backend/backendbr'>
        <ListItem
          leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={orange500} />}
          primaryText='Backend-End Brasil'
          secondaryText='Vagas do Repositório'
        />
      </Link>
      <Link to='/jobs/backend/soujava'>
        <ListItem
          leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={orange500} />}
          primaryText='SouJava'
          secondaryText='Vagas do Repositório'
        />
      </Link>
    </List>
  </div>
)

export default HomePage
