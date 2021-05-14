
import React from 'react';
import LGLeftPanel from '../LeftPanel/LGLeftPanel';
import LGMainContent from '../CenterPanel/LGMainContent';
import LGRightPanel from '../RightPanel/LGRightPanel';
import { HashRouter as Router } from "react-router-dom";
import '../pages.scss'

export default function Defaultpage() {
    return (
        <div className="lg-default-view">
            <Router>
                <LGLeftPanel></LGLeftPanel>
                <LGMainContent></LGMainContent>
                <LGRightPanel></LGRightPanel>
            </Router>
        </div>
    )
}