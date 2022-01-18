
const isValidWebsite = (website) => website.includes('www');
const isValidEmail = (email) => email.includes('@') && isValidDomain(email);
const isValidDomain = (email) => email.split('@')[1].includes('.');
const isValidPhoneNumber = (telefon) => /^\d+$/.test(telefon);

const isAppointmentValid = (appointment) =>
  isValidEmail(appointment.email)&&
  isValidWebsite(appointment.website)&&
  isValidPhoneNumber(appointment.telefon);

export default isAppointmentValid;