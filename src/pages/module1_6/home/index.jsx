import React from 'react';
import styles from '@/assets/styles/1.6/Home.module.scss';
import { Popover, Row, Table } from 'antd';
import dots from '@/assets/svg/dots.svg';
import arrowGreen from '@/assets/svg/arrowGreen.svg';
import arrowRed from '@/assets/svg/arrowRed.svg';
import MainLayout from '@/components/1.6/UI/Layout';

const content = (
   <div>
      <p>Tool 1</p>
      <p>Tool 2</p>
   </div>
);

const HomePage = () => {
   const columns = [
      {
         title: <p className={styles.columnTitle}>№</p>,
         dataIndex: 'number',
         render: (value) => <p className={styles.columnData}>{value}</p>,
      },
      {
         title: <p className={styles.columnTitle}>Имя</p>,
         dataIndex: 'name',
         render: (value) => <p className={styles.columnDataName}>{value}</p>,
      },
      {
         title: <p className={styles.columnTitle}>В очереди</p>,
         dataIndex: 'inOrder',
         render: (value) => <p className={styles.columnData}>{value}</p>,
      },
      {
         title: <p className={styles.columnTitle}>Льгота</p>,
         dataIndex: 'benefit',
         render: (value) => <p className={styles.columnData}>{value}</p>,
      },
      {
         title: <p className={styles.columnTitle}>Услуга</p>,
         dataIndex: 'service',
         render: (value) => <p className={styles.columnData}>{value}</p>,
      },

      {
         title: <p className={styles.columnTitle}>Статус</p>,
         dataIndex: 'status',
         render: (value) => <p className={styles.columnDataTime}>{value}</p>,
      },
      {
         title: <p className={styles.columnTitle}>Время обслуживания</p>,
         dataIndex: 'time',
         render: (value) => <p className={styles.columnDataStatus}>{value}</p>,
      },
   ];
   const data = [
      {
         number: 'A0122',
         name: 'Ильясов Айбек Рустамович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 1',
         status: 'Завершен',
         time: '15',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
      {
         number: 'A0912',
         name: 'Иванов Федор Петрович',
         inOrder: '-',
         benefit: 'нет',
         service: 'Услуга 4',
         status: 'В процессе',
         time: '18',
      },
   ];

   return (
      <MainLayout>
         <div className={styles.main}>
            <div className={styles.cardBlock}>
               <div className={styles.card1}>
                  <div className={styles.head}>
                     <div>
                        <Popover
                           content={content}
                           trigger='click'
                           placement='rightTop'
                        >
                           <img src={dots} alt='dots' />
                        </Popover>
                     </div>
                     <p>Клиентов за день</p>
                  </div>
                  <div className={styles.body}>
                     <div>
                        <img src={arrowGreen} alt='arrow' />
                        <span>3</span>
                     </div>
                     <p>Больше чем вчера</p>
                  </div>
                  <div className={styles.footer}>
                     <p>16</p>
                  </div>
               </div>
               <div className={styles.card2}>
                  <div className={styles.head}>
                     <div>
                        <Popover
                           content={content}
                           trigger='click'
                           placement='rightTop'
                        >
                           <img src={dots} alt='dots' />
                        </Popover>
                     </div>
                     <p>Отмененные визиты</p>
                  </div>
                  <div className={styles.body}>
                     <div>
                        <img src={arrowRed} alt='arrow' />
                        <span>1</span>
                     </div>
                     <p>Больше чем вчера</p>
                  </div>
                  <div className={styles.footer}>
                     <p>4</p>
                  </div>
               </div>
            </div>

            <Table
               dataSource={data}
               columns={columns}
               scroll={{ x: 1300 }}
               title={() => (
                  <p
                     style={{
                        fontFamily: "'Inter', sanf-serif",
                        color: '#2B2B2B',
                        fontSize: '18px',
                        fontWeight: '600',
                     }}
                  >
                     Все клиенты:
                  </p>
               )}
            />
         </div>
      </MainLayout>
   );
};

export default HomePage;
