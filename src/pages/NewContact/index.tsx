import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import ContactService from "../../services/ContactService";
import { Contact } from "../../utils/types/contactType";

export default function NewContact() {
  async function handleSubmit(formData: Contact) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const response = await ContactService.createContact(contact);
      console.log(response);
    } catch (error) {
      alert("Ocorreu um erro");
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
