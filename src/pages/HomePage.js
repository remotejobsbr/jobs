import React from 'react'
import { Link } from 'react-router-dom'

import {
  List,
  ListItem,
  Divider,
  Subheader,
  Avatar
} from 'material-ui'

import { blue500, orange500, pink500 } from 'material-ui/styles/colors'
import FolderIcon from '@material-ui/icons/Folder'

import WidthContainer from '../components/container/WidthContainer'

import { title } from './styles/HomePage.style'

const HomePage = () => (
  <div>
    <h1 className={title}>Remote Job Br</h1>
    <WidthContainer>
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
        <Link to='/jobs/backend/phpdevbrasil'>
          <ListItem
            leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={orange500} />}
            primaryText='PHP Dev Brasil'
            secondaryText='Vagas do Repositório'
          />
        </Link>

        <Divider />

        <Subheader inset>Vagas Mobile</Subheader>
        <Link to='/jobs/mobile/androiddevbr'>
          <ListItem
            leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={pink500} />}
            primaryText='Android Dev BR'
            secondaryText='Vagas do Repositório'
          />
        </Link>
        <Link to='/jobs/mobile/cocoaheadsbrasil'>
          <ListItem
            leftAvatar={<Avatar icon={<FolderIcon />} backgroundColor={pink500} />}
            primaryText='CocoaHeads Brasil (IOS)'
            secondaryText='Vagas do Repositório'
          />
        </Link>
      </List>
    </WidthContainer>
  </div>
)

export default HomePage
