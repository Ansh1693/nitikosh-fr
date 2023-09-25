import ReactDOM from 'react-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
	caseName: string
	caseNumber: string

	caseType: string
}
import Nav from './Nav'

function Step1() {
	const { register, handleSubmit } = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
	return (
		<div>
			<Nav />
			<form onChange={handleSubmit(onSubmit)}>
				<input
					{...register('caseName')}
					placeholder='Enter Case Name'
				/>

				<input
					{...register('caseNumber')}
					placeholder='Enter Case Number'
					// type='number'
				/>
				<select {...register('caseType')} defaultValue=''>
					<option value='' disabled>
						Select Case Type...
					</option>
					<option value='civil'>Civil</option>
					<option value='criminal'>Criminal</option>
					<option value='other'>Others</option>
				</select>
			</form>
		</div>
	)
}

export default Step1
