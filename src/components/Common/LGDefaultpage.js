
import React from 'react';
import LGLeftPanel from '../LeftPanel/LGLeftPanel';
import LGMainContent from '../CenterPanel/LGMainContent';
import LGRightPanel from '../RightPanel/LGRightPanel';
import '../pages.scss'

export default function Defaultpage() {
    return(
        <div className="lg-default-view">
            <LGLeftPanel></LGLeftPanel>
            <LGMainContent></LGMainContent>
            <LGRightPanel></LGRightPanel>
        </div>
    )
}