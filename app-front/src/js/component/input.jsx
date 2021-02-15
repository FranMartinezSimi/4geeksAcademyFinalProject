import React from 'react';
import { formatDate, getCurrentDate, getMaxDate } from '../constants/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { validate, format } = require('rut.js');

class Input extends React.Component {
    state = { 
        data: {},
        errors: {}
    }
    
    handleChange = (e) => {
        let { data, errors } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        value = name === 'category' ? parseInt(value) : value;
		value = name === 'date' ? formatDate(value) : value;
        data[name] = value;

        if (errors[name] !== '' ) {
            delete errors[name];
            return this.setState({errors});
        }
        
        this.setState({ data });
    };

    
    validation = e => {
        let input = e.target.value;
        let name = e.target.name;
        let errors = {...this.state.errors};

        if (name !== 'thumbnail' && input === "") {
            errors[name] = 'No puedes dejar este campo vacío';
            this.setState({errors});
        }
           
        
        if (name === 'title') {
            if (input.length > 0 && input.length <= 4) {
                errors[name] = 'El título es demasiado corto, describe un poco más tu tarea';
                return this.setState({errors});
            } 
             

            if (input.length > 25) {
                errors[name] = 'El título es demasiado largo. Intenta acortarlo un poco';
                return this.setState({errors});
            }    
        } 


        if (name === 'date') {
            let today = getCurrentDate();
            let maxDate = getMaxDate();

            if (input < today) {
                errors[name] = 'No puedes elegir una fecha pasada';
                this.setState({errors});
            } 

            if (input > maxDate) {
                errors[name] = 'No puedes ingresar una fecha tan lejana';
                this.setState({errors});
            }
            this.setState({errors});   
        }


        if (name === 'payment') {
            input = input.replace(/\./, '');
        
            if (input < 5000) {
                errors[name] = 'El pago mínimo que puedes ofrecer es $5.000';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        }  
        
        if (name === 'phonenumber') {

            if (input.length < 7) {
                errors[name] = 'Revisa que el número ingresado sea correcto';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        }  


        if (name === 'username') {
        
            if (input.length > 0 && input.length < 4) {
                errors[name] = 'Tu nombre de usuario debe tener al menos 4 caracteres';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        }    

        if (name === 'name') {
        
            if (input.length > 0 && input.length < 2) {
                errors[name] = 'El nombre ingresado es demasiado corto, revisa que la información sea correcta';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        } 

        if (name === 'lastname') {
        
            if (input.length > 0 && input.length < 2) {
                errors[name] = 'El nombre ingresado es demasiado corto, revisa que la información sea correcta';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        } 


        if (name === 'password') {
        
            if (input.length > 0 && input.length < 4) {
                errors[name] = 'Tu contraseña debe tener al menos 4 caracteres';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        } 


        if (name === 'rut') {
            input = format(input);

            if (!validate(input)) {
                errors[name] = 'El RUT ingresado no es válido';
                this.setState({errors});
            } 
            
            this.setState({errors});   
        } 


        if (name === 'thumbnail' && input !== '') {
            input = input.search(/.[jp|sv|pn]g/)
            
            if (input === -1) {
                errors[name] = 'Debes elegir una imagen en formato .jpg, .png o .svg';
                this.setState({errors});
            }
        } 

        if (name === 'email') {
            input = /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/.test(input);
            console.log(input)
            
            if (!input) {
                errors[name] = 'Asegúrate de ingresar el formato correcto de email';
                this.setState({errors});
            }
        } 

        if (name === 'phone') {
            
            if ( input.length < 8 || input.length > 11) {
                errors[name] = 'El número ingresado no es válido, revisa que sea correcto';
                this.setState({errors});
            }
        } 
        
    }

	renderInput(name, label, type = 'text', placeholder='', min=4, max=20) {
		if (this.store !== null && this.actions !== null) {
			return (
				<Input name={name} label={label} value={this.state[name]} onChange={this.handleChange} onBlur={this.validation} type={type} placeholder={placeholder} min={min} max={max} />
			);
		}
	}
    
    renderButton(label) {
        return(<button className="large-btn" type="submit">
        {label}
    </button>)
    }

    renderDisabledButton(label) {
        return (<button className="large-btn disabled" type="submit" disabled>
        {label}
    </button>)
    }

    renderError(name) {
        return (<div className={this.state.errors[name] !== undefined ? 'error' : 'display-none'}>
        <FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors[name]}
    </div>)
    }

    render() { 
        const { name, label, ...rest} = this.props;
        
        return (<>
            <label htmlFor={name}>{label}</label>
            <input
               {...rest}
                id={name}
                name={name}
                
            />
            </>  );
    }
}
 
export default Input;






