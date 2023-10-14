'use client';
// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
// ** Styled Component
import DatePickerWrapper from '../../@core/styles/libs/react-datepicker'
import FormLayoutsTabs from '../../../components/FormWithTabs'
import React from 'react';
import Layout from '../../../components/Layout';

const FormLayouts = () => {
    return (
        <>
            <Layout>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '40px' }}>
                    <DatePickerWrapper>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(8)} !important`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography variant='h6'>Welcome To <strong>Gaurav</strong> Ecommerce</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(4)} !important` }}>
                                <FormLayoutsTabs />
                            </Grid>
                        </Grid>
                    </DatePickerWrapper>
                </div>
            </Layout>
        </>
    )
}
export default FormLayouts;
