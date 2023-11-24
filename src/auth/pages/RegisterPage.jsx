import { useMemo } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
	displayName: '',
	email: '',
	password: '',
}

const formValidations = {
	email: [(value) => value.includes('@'), 'El correo debe tener un @.'],
	password: [(value) => value.length >= 6, 'El password debe de tener más de 6 caracteres.'],
	displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {

	const dispatch = useDispatch();

	const [formSubmmited, setFormSubmmited] = useState( false );

	const { status, errorMessage } = useSelector( state => state.auth );
	const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

	const {
		formState, displayName, email, password, onInputChange,
		isFormValid, displayNameValid, emailValid, passwordValid,
	} = useForm( formData, formValidations );


	const onSubmit = ( event ) => {
		event.preventDefault();
		setFormSubmmited( true );

		if ( !isFormValid ) return;

		dispatch( startCreatingUserWithEmailPassword( formState ) );
	};


	return (
		<AuthLayout title='Create Account'>
			<form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
				<Grid container>
					<Grid item xs={ 12 } sx={{ mt: 2 }}>
						<TextField
							label="Nombre completo"
							type="text"
							placeholder='Killua Zoldick'
							fullWidth
							name='displayName'
							value={ displayName }
							onChange={ onInputChange }
							error={ !!displayNameValid && formSubmmited }
							helperText={ displayNameValid }
						/>
					</Grid>

          			<Grid item xs={ 12 } sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							placeholder='correo@google.com'
							fullWidth
							name='email'
							value={ email }
							onChange={ onInputChange }
							error={ !!emailValid && formSubmmited }
							helperText={ emailValid }
						/>
					</Grid>

					<Grid item xs={ 12 } sx={{ mt: 2 }}>
						<TextField
							label="Contraseña"
							type="password"
							placeholder='Contraseña'
							fullWidth
							name='password'
							value={ password }
							onChange={ onInputChange }
							error={ !!passwordValid && formSubmmited }
							helperText={ passwordValid }
						/>
					</Grid>

					<Grid container spacing={ 2 } sx={{ mb: 2, mt:1 }}>
						<Grid
							item
							xs={ 12 }
							sm={ 12 }
							display={ !!errorMessage ? '' : 'none' }
						>
							<Alert severity='error'>{ errorMessage }</Alert>
						</Grid>
						<Grid item xs={ 12 } sm={ 12 }>
							<Button
								disabled={ isCheckingAuthentication }
								type='submit'
								variant='contained'
								fullWidth
							>
								Register
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{ mr: 1 }} >¿Ya tienes una cuenta?</Typography>
						<Link component={ RouterLink } color='inherit' to='/auth/login' >
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>

	)
}
