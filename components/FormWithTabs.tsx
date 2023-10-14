// ** React Imports
import { useState } from 'react'
import React from 'react'
import { useForm, Controller } from 'react-hook-form';

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import CardActions from '@mui/material/CardActions'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import Icon from '../src/@core/components/icon';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormHelperText } from '@mui/material';

interface ValuesState {
    password: string;
    password2: string;
    showPassword: boolean;
    showPassword2: boolean;
}
interface FormValues {
    firstName: string;
    lastName: string;
    country: string;
    language: string[];
    birthDate: Date | null;
    PhoneNo: string;
    userName: string
    email: string
    password: string;
    password2: string;

}
const defaultValues = {
    email: '',
    lastName: '',
    password: '',
    firstName: ''
}

const showErrors = (field: any, valueLen: any, min: any) => {
    if (valueLen === 0) {
        return `${field} field is required`
    } else if (valueLen > 0 && valueLen < min) {
        return `${field} must be at least ${min} characters`
    } else {
        return ''
    }
}

const schema = yup.object().shape({
    email: yup.string().email().required(),
    lastName: yup
        .string()
        .min(3, obj => showErrors('lastName', obj.value.length, obj.min))
        .required(),
    password: yup
        .string()
        .min(8, obj => showErrors('password', obj.value.length, obj.min))
        .required(),
    firstName: yup
        .string()
        .min(3, obj => showErrors('firstName', obj.value.length, obj.min))
        .required(),
    PhoneNo: yup
        .string()
        .min(10, obj => showErrors('PhoneNo', obj.value.length, obj.min))
        .max(15, "Phone number must be at most 15 characters")
        .required("Phone number is required"),

})

const FormLayoutsTabs: React.FC = () => {
    const {
        control,
        handleSubmit,
        reset,
        trigger,
        formState: { errors }
    } = useForm<FormValues>({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema) as any
    })

    const onSubmit = async (data: FormValues) => {
        const validate = await trigger();
        if (validate) {

        }
    };
    const [value, setValue] = useState('personal-info');
    const [date, setDate] = useState<Date | null>(null);
    const [language, setLanguage] = useState<string[]>([]);
    // const [language, setLanguage] = useState<string>('');
    const [values, setValues] = useState<ValuesState>({
        password: '',
        password2: '',
        showPassword: false,
        showPassword2: false,
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    const handlePasswordChange = (prop: keyof ValuesState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleConfirmChange = (prop: keyof ValuesState) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showPassword2: !values.showPassword2 });
    };

    const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLanguage(event.target.value as string[]);
    };

    const handleReset = () => {
        reset(); // This will reset the form values to their initial state.
        setCurrentStep(1);
        setFormSubmitted(false);
        setValue('personal-info')
    };
    const handleNext = async () => {
        if (currentStep === 1) {
            setValue('account-details')
            setCurrentStep(2);
        } else if (currentStep === 2) {
            setCurrentStep(3);
        }
    };
    const handlePrev = () => {
        if (currentStep === 2) {
            setValue('personal-info');
            setCurrentStep(1);

        }
    }
    return (
        <Card>
            <TabContext value={value}>
                <TabList
                    variant='scrollable'
                    scrollButtons={false}
                    onChange={handleTabsChange}
                    sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}`, '& .MuiTab-root': { py: 3.5 } }}
                >
                    <Tab value='personal-info' label='Personal Info' />
                    <Tab value='account-details' label='Account Details' />
                </TabList>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>
                        <TabPanel sx={{ p: 0 }} value='personal-info'>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField fullWidth label='First Name' placeholder='Leonard' {...field} />
                                        )}
                                    />
                                    {errors.firstName && (
                                        <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-last-name'>
                                            {errors.firstName.message}
                                        </FormHelperText>
                                    )}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField
                                                fullWidth
                                                label='Last Name'
                                                placeholder='Carter'
                                                {...field}
                                                error={Boolean(errors.lastName)} />
                                        )}
                                    />
                                    {errors.lastName && (
                                        <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-last-name'>
                                            {errors.lastName.message}
                                        </FormHelperText>
                                    )}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="country"
                                        control={control}
                                        // defaultValue={[]}
                                        defaultValue=''
                                        render={({ field }) => (
                                            <FormControl fullWidth>
                                                <InputLabel id='form-layouts-tabs-select-label'>Country</InputLabel>
                                                <Select
                                                    label='Country'
                                                    labelId='form-layouts-tabs-select-label'
                                                    {...field}
                                                >
                                                    <MenuItem value='UK'>UK</MenuItem>
                                                    <MenuItem value='USA'>USA</MenuItem>
                                                    <MenuItem value='Australia'>Australia</MenuItem>
                                                    <MenuItem value='Germany'>Germany</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="language"
                                        control={control}
                                        defaultValue={[]}
                                        // defaultValue=''
                                        render={({ field }) => (
                                            <FormControl fullWidth>
                                                <InputLabel id='form-layouts-tabs-multiple-select-label'>Language</InputLabel>
                                                <Select
                                                    multiple
                                                    label='Language'
                                                    labelId='form-layouts-tabs-multiple-select-label'
                                                    input={<OutlinedInput label='Language' id='tabs-select-multiple-language' />}
                                                    {...field}
                                                >
                                                    <MenuItem value='English'>English</MenuItem>
                                                    <MenuItem value='French'>French</MenuItem>
                                                    <MenuItem value='Spanish'>Spanish</MenuItem>
                                                    <MenuItem value='Portuguese'>Portuguese</MenuItem>
                                                    <MenuItem value='Italian'>Italian</MenuItem>
                                                    <MenuItem value='German'>German</MenuItem>
                                                    <MenuItem value='Arabic'>Arabic</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                                {/* <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="birthDate"
                                        control={control}
                                        defaultValue={null}
                                        render={({ field }) => (
                                            <DatePicker
                                                selected={field.value}
                                                showYearDropdown
                                                showMonthDropdown
                                                id='form-layouts-tabs-date'
                                                placeholderText='MM-DD-YYYY'
                                                customInput={<CustomInput />}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    {errors.lastName && (
                                        <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-last-name'>
                                            {errors.lastName.message}
                                        </FormHelperText>
                                    )}
                                </Grid> */}
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="PhoneNo"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField fullWidth label='Phone No.' placeholder='+1-123-456-8790' {...field} />
                                        )}
                                    />
                                    {errors.PhoneNo && (
                                        <FormHelperText sx={{ color: 'error.main' }} id='validation-schema-last-name'>
                                            {errors.PhoneNo.message}
                                        </FormHelperText>
                                    )}
                                </Grid>
                            </Grid>
                        </TabPanel>

                        <TabPanel sx={{ p: 0 }} value='account-details'>
                            <Grid container spacing={5}>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="userName"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField fullWidth label='Username' placeholder='carterLeonard' {...field} />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <TextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' {...field} />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor='form-layouts-tabs-password'>Password</InputLabel>
                                                <OutlinedInput
                                                    label='Password'
                                                    id='form-layouts-tabs-password'
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                edge='end'
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={e => e.preventDefault()}
                                                                aria-label='toggle password visibility'
                                                            >
                                                                <Icon icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Controller
                                        name="password2"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor='form-layouts-tabs-password-2'>Confirm Password</InputLabel>
                                                <OutlinedInput
                                                    label='Confirm Password'
                                                    id='form-layouts-tabs-password-2'
                                                    type={values.showPassword2 ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position='end'>
                                                            <IconButton
                                                                edge='end'
                                                                onMouseDown={e => e.preventDefault()}
                                                                aria-label='toggle password visibility'
                                                                onClick={handleClickShowConfirmPassword}
                                                            >
                                                                <Icon icon={values.showPassword2 ? 'tabler:eye' : 'tabler:eye-off'} />
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    {...field}
                                                />
                                            </FormControl>
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </CardContent>
                    <Divider sx={{ m: '0 !important' }} />
                    <CardActions>
                        {currentStep <= 2 && (
                            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={handleNext} >
                                {currentStep === 1 ? 'Next' : 'Submit'}
                            </Button>
                        )}
                        {currentStep === 2 && (
                            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={handlePrev} >
                                Back
                            </Button>
                        )}
                        <Button type='reset' size='large' variant='outlined' color='secondary' onClick={handleReset}>
                            Reset
                        </Button>
                    </CardActions>
                </form>
            </TabContext>
        </Card>
    );
};

export default FormLayoutsTabs;
