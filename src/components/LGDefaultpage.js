
import React from 'react';
import LGLeftPanel from './LGLeftPanel';
import LGMainContent from './LGMainContent';
import LGRightPanel from './LGRightPanel';
import './pages.scss'

export default function Defaultpage() {
    return(
        <div className="lg-default-view">
            <LGLeftPanel></LGLeftPanel>
            <LGMainContent></LGMainContent>
            <LGRightPanel></LGRightPanel>
        </div>
    )
}