import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import ContactService from "../../services/ContactService";
import toast from "../../utils/toast";
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

      await ContactService.createContact(contact);

      toast({
        type: "success",
        text: "Contato cadastrado com sucesso!",
      });
    } catch (error) {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao cadastrar o contato!",
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
