import React from 'react';
import { CheckPicker } from 'rsuite';
import {OccupationList} from '../../components/occupationlist/occupationlist';

const MultiSelector =()=>(

    <CheckPicker data={OccupationList} style={{ width: 224 }} />
)


export default MultiSelector;