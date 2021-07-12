import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import authService from '../services/auth.service'
import logos from "../assets/logo2.png";

const TheHeaderDropdown = () => {
  const user = authService.getCurrentUser();
  const handleLogout = () => {
    authService.logout();
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar" style={{marginRight: "15px"}}>
          <CImg
            src={logos}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
        <div style={{marginRight: "15px"}}>
          {user.data[0].nm_user}
        </div>
        <CIcon name="cil-level-down"/>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={handleLogout}>
          <CIcon name="cil-account-logout" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
