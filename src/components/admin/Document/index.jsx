import React, { useEffect, useState } from 'react';

import Checkbox from 'antd/es/checkbox/Checkbox';
import { CustomLoading } from '@/utils/utils';
import EditDocumentModal from './EditDocumentModal';
import styles from './Document.module.scss';
import { useAdmin } from '@/services/adminStore';

const Document = () => {
   const forData = new FormData();

   const getDocuments = useAdmin((state) => state.getDocuments);
   const documents = useAdmin((state) => state.documents);
   const isDocumentsLoading = useAdmin((state) => state.isDocumentsLoading);
   const submitDocuments = useAdmin((state) => state.submitDocuments);
   const deleteDocument = useAdmin((state) => state.deleteDocument);
   const editDocument = useAdmin((state) => state.editDocument);

   const [document, setDocument] = useState();
   const [isEditDocumentModal, setIsEditDocumentModal] = useState(false);
   const [choosedDocument, setChoosedDocument] = useState();

   const handleCreateDocument = (e) => {
      const { value, name, type, checked } = e.target;
      let editedValue;

      if (type === 'file') {
         editedValue = e.target.files[0];
      } else if (type === 'checkbox') {
         editedValue = checked;
      } else {
         editedValue = value;
      }

      setDocument((prev) => ({
         ...prev,
         required: checked ? checked : false,
         [name]: editedValue,
      }));
   };

   const handleSubmitDocument = async (e) => {
      e.preventDefault();
      forData.append('file', document.file);
      forData.append('name', document.name);
      forData.append('required', document.required);

      await submitDocuments(forData);
      await getDocuments();
   };

   const handleDeleteDocument = async (id) => {
      await deleteDocument(id);
      await getDocuments();
   };

   const handleOpenModal = (id) => {
      setIsEditDocumentModal(true);
      setChoosedDocument(documents?.find((item) => item.id === id));
   };

   useEffect(() => {
      getDocuments();
   }, []);

   return isDocumentsLoading ? (
      <CustomLoading />
   ) : (
      <div className={styles.documentBlock}>
         <form action='submit'>
            <div className={styles.inputBlock}>
               <p>Название:</p>
               <input
                  onChange={(e) => handleCreateDocument(e)}
                  type='text'
                  placeholder='Название'
                  name='name'
               />
            </div>
            <div className={styles.inputBlock}>
               <p>Файл:</p>
               <input
                  onChange={(e) => handleCreateDocument(e)}
                  type='file'
                  name='file'
                  accept='.pdf, .txt, .doc, .docx'
               />
            </div>
            <div className={styles.inputBlock}>
               <p>Обязательно:</p>
               <Checkbox
                  onChange={(e) => handleCreateDocument(e)}
                  name='required'
                  type='checkbox'
                  defaultChecked={false}
               />
            </div>
            <div className={styles.inputBlock}>
               <p>Англ:</p>
               <input
                  onChange={(e) => handleCreateDocument(e)}
                  type='text'
                  placeholder='Англ'
                  name='lang_name'
               />
            </div>
            <div className={styles.buttonBlock}>
               <button onClick={(e) => handleSubmitDocument(e)}>Создать</button>
            </div>
         </form>

         {isEditDocumentModal && (
            <EditDocumentModal
               isEditDocumentModal={isEditDocumentModal}
               setIsEditDocumentModal={setIsEditDocumentModal}
               documnet={choosedDocument}
            />
         )}
         <div className={styles.list}>
            {documents?.map((item) => (
               <div className={styles.test_doc} key={item.id}>
                  <div className={styles.doc_id}>ID: {item?.id}</div>
                  <div className={styles.doc_name}>Name: {item?.name}</div>

                  <div className={styles.footer}>
                     <a
                        className={styles.doc_link}
                        href={item?.file}
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        Открыть
                     </a>

                     <button onClick={() => handleOpenModal(item.id)} className={styles.doc_link}>
                        Изменить
                     </button>
                     <button
                        onClick={() => handleDeleteDocument(item.id)}
                        className={styles.doc_link}
                     >
                        Удалить
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Document;