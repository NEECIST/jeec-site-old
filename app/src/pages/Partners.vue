<template>
    <div class="partners-app">
        <h2 id="speaker-title">
            JEEC|22 partners
        </h2>

        <component-title
            v-if="partners.main_sponsor.length > 0"
            title="Main Sponsor"
            :subtitle="partners.main_sponsor[0].name"
        />
        <div style="display: flex; align-items: center; justify-content: center">
            <a v-if="partners.main_sponsor.length > 0" v-for="main in partners.main_sponsor" v-bind:key="main.id" v-bind:href="main.link" target="_blank">
                <img class="main-sponsor-logo" :src=main.logo> 
            </a>
        </div>

        <partner-tier tier="Gold Partners" v-bind:partners="partners.gold" tier_color="#cfbf2c"/>
        <partner-tier tier="Silver Partners" v-bind:partners="partners.silver" tier_color="#B7B7B7"/>
        <partner-tier tier="Bronze Partners" v-bind:partners="partners.bronze" tier_color="#CE8F6B"/>
        <partner-tier tier="Our Sponsors" v-bind:partners="partners.sponsor" tier_color="#000000"/>

        <contacts :email="event ? event.email : []"/>
    </div>
</template>

<script>
//import axios from 'axios';

export default {
    name: 'partners',
    data() {
        return {
            event: {email: 'coordination@jeec.ist'},
            //jeec_api_url : process.env.VUE_APP_JEEC_BRAIN_URL,

            partners:
            {
                main_sponsor: [{id: '18', created_at: '2019-09-15 14:20:35.294484', updated_at: '2022-03-17 21:05:43.581083', external_id: '72d3672a-30d0-4227-86df-9d5d026eed9a', name: 'Premium Minds', logo: "../../static/imagens/companies/real companies/premium_minds.png" , email: 'tiago.santos@premium-minds.com', link:'https://www.premium-minds.com', business_area: 'Software House', partnership_tier:'main_sponsor', show_in_website: true, chat_code: 'PbsZw7FbwztgaWLI', chat_id:'rtEKD9LpFpT2LLM9a', cvs_access: true},
                ],
                gold: [{id: '6', created_at: '2019-09-15 12:32:50.215971', updated_at: '2022-03-17 20:56:22.828301', external_id: '91e9e1e1-f668-4dcd-8b9a-63e9ac997c5f', name: 'Deloitte', logo: "../../static/imagens/companies/real companies/deloitte.png" , email: 'andreferodrigues@deloitte.pt', link: 'https://www.deloitte.com', business_area: 'Consulting', partnership_tier:'gold', show_in_website: true, chat_code: 'nZBd4Nig4HOnCr8J	Mi6nEuCsXhBSgwyrp', cvs_access: true, },
                       {id: '9', created_at: '2019-09-15 12:35:44.068217', updated_at: '2022-03-17 21:02:09.321242', external_id: '3f8cdaca-e330-4b6d-8039-f578b980e447', name: 'KPMG'	, logo: "../../static/imagens/companies/real companies/kpmg.png" , email: '', link:'https://home.kpmg/pt/pt/home.html', business_area: 'Consulting', partnership_tier:'gold', show_in_website: true, chat_code: 'PnSHNNyS0EHGuWIR', chat_id:'c7tvSnW6RRCPduhJn', cvs_access: true},
                       {id: '101', created_at: '2022-03-09 20:30:47.556651', updated_at: '2022-03-20 22:33:36.492157', external_id: 'c42035fd-ca3c-42cd-b59b-1ad447a3ec59', name: 'NTT Data Portugal', logo: "../../static/imagens/companies/real companies/ntt_data_portugal.png" , email: 'carla.oliveira.goncalves@nttdata.com', link:'https://pt.nttdata.com/', business_area: 'Consulting', partnership_tier:'gold', show_in_website: true, chat_code: 'FJFiGVlLCWFTTCHl', chat_id: 'sB3FCNDCSgzjehuZH', cvs_access: true},
                       {id: '103', created_at: '2022-03-09 20:44:12.477634', updated_at: '2022-03-17 20:53:28.382124', external_id: '9c09c1dc-ed00-490b-8316-95b60687e816', name: 'Avanade', logo: "../../static/imagens/companies/real companies/avanade.png" , email: 'ana.paula.arsenio@avanade.com', link: 'https://www.avanade.com/pt-pt', business_area: '', partnership_tier:'gold', show_in_website: true, chat_code: 'nX0oVCRHyQFLt0xr', chat_id: 'YjopNnbmfhomw6JJ6', cvs_access: false},
                       {id: '124', created_at: '2022-03-20 05:04:18.329227', updated_at: '2022-03-20 05:04:18.329234', external_id: '6d9f5d6e-022b-4f8c-b36f-599755912ebe', name: 'INESC-ID', logo: "../../static/imagens/companies/inesc-id.png" , email: '', link:'https://www.inesc-id.pt/', business_area: '', partnership_tier:'gold', show_in_website: true, chat_code: '2CrSlgHvO0xY8MYG', chat_id: 'GuwveZGonAqAHstK9', cvs_access: false},
                       {id: '125', created_at: '2022-03-20 05:04:48.854981', updated_at: '2022-03-20 05:04:48.854987', external_id: 'af450417-9a95-4d3c-94ae-42fe5448875d', name: 'ISR', logo: "../../static/imagens/companies/isr.png" , email: '', link:'https://welcome.isr.tecnico.ulisboa.pt/', business_area: '', partnership_tier:'gold', show_in_website: true, chat_code: 'MQat1KSHmFyfJjPS', chat_id: 'YQiyL94QWY9E2hkF8', cvs_access: false},
                       {id: '126', created_at: '2022-03-20 05:05:16.02351', updated_at: '2022-03-20 05:05:16.023516', external_id: '897eb6bc-2ac5-4019-9539-30d54dd9252a', name: 'IT', logo: "../../static/imagens/companies/it.png" , email: '', link:'https://www.it.pt/', business_area: '', partnership_tier:'gold', show_in_website: true, chat_code: 'e1Qcev4Wg4wUeroy', chat_id: '746N3BcT7sDvM44Qc', cvs_access: false},

                ],
                silver: [{id: '2', created_at: '2019-09-04 23:59:27.463877', updated_at: '2022-03-20 02:26:48.414381', external_id: '633a0a63-874d-44f7-a9d0-389b2b63ff92', name: 'Accenture', logo: "../../static/imagens/companies/real companies/accenture.png" , email: 'mariana.m.reis@accenture.com', link: 'https://www.accenture.com/pt-pt/new-applied-now', business_area: 'Consulting', partnership_tier:'silver', show_in_website: true, chat_code: 'v6DBK0Hqp0LXL9BI', chat_id:'nfCQdPGXWxBTn6Pgh', cvs_access: true,},
                         {id: '13', created_at: '2019-09-15 14:14:36.361466', updated_at: '2022-03-20 22:36:03.101885', external_id: '1da1ef7e-cfdc-47fb-a058-873813a0763f', name: 'CELFOCUS', logo: "../../static/imagens/companies/real companies/celfocus.png" , email: 'jessica.facha@celfocus.com', link:'https://www.novabase.pt/pt', business_area: 'Software Consulting', partnership_tier:'silver', show_in_website: true, chat_code: 'ENzvSURujGoTmSoK', chat_id:'uD3BqFxbamWeFudu8', cvs_access: true},
                         {id: '15', created_at: '2019-09-15 14:18:38.071544', updated_at: '2022-03-17 21:10:07.029786', external_id: 'e1a448a8-6762-4399-bfbc-774b981dbebd', name: 'Thales', logo: "../../static/imagens/companies/real companies/thales.png" , email: 'joao.frade@thalesgroup.com', link:'https://www.thalesgroup.com/pt-pt', business_area: '', partnership_tier:'silver', show_in_website: true, chat_code: 'QzcAftQMG2jbyBw4' , chat_id:'HM6BSmDyPqJ3T273z', cvs_access: true},
                         {id: '30', created_at: '2019-09-15 15:26:59.691647', updated_at: '2022-03-17 21:04:52.511044', external_id: '33375d7b-fdef-4dec-a77c-46e806fc32ef', name: 'NOS', logo: "../../static/imagens/companies/real companies/nos.png" , email: 'Carolina.Alves@nos.pt',	link:'https://www.nos.pt/', business_area: '', partnership_tier:'silver', show_in_website: true, chat_code: 'vIvrRJbQvy6xH67M', chat_id: 'HWC3EkvoGiRTr6JxA', cvs_access: true},
                         {id: '34', created_at: '2019-09-15 15:28:45.718938', updated_at: '2022-03-17 21:11:26.535739', external_id: 'd4065a6a-e348-4590-961c-a8fa13ebb08e', name: 'Synopsys', logo: "../../static/imagens/companies/real companies/synopsys.png" , email: 'Rita.Alves@synopsys.com', link:'https://www.synopsys.com/', business_area: '', partnership_tier:'silver', show_in_website: true, chat_code: 'TPjGH4JBJrrOCs7g', chat_id: 'HANtGemu5oQYCk2Pj', cvs_access: true},
                         {id: '37', created_at: '2019-09-15 15:30:12.941127', updated_at: '2022-03-17 21:08:23.487515', external_id: 'f23926e5-866b-4b55-ab5e-570dc852448b', name: 'WEG', logo: "../../static/imagens/companies/weg.png" , email: '', link:'https://www.weg.net/institutional/PT/pt_PT/', business_area: 'Electric motors', partnership_tier:'silver', show_in_website: true, chat_code: 'xOGKvTybz3EWK8Hx', chat_id: 'P6Npb877X3aDKzFLd', cvs_access: false},
                         {id: '43', created_at: '2019-11-10 19:03:15.254972', updated_at: '2022-03-17 20:54:07.2366', external_id: '983c46d9-869d-48ea-84a8-c14d19045bfc', name: 'BNP Paribas', logo: "../../static/imagens/companies/real companies/bnp_paribas.png" , email: 'joana.pataco@bnpparibas.com',	link:'https://www.bnpparibas.pt/en/', business_area: '', partnership_tier:'silver', show_in_website: true, chat_code: 'jUgc6MLmLXtiTPUp', chat_id: 'NK5fcpRBT9XdqS6KJ', cvs_access: true},
                         {id: '48', created_at: '2019-11-10 19:08:20.379881', updated_at: '2022-04-27 11:47:23.550385', external_id: '5f1b868d-e772-46ae-a944-0d3dd3a60151', name: 'Spin.Works', logo: "../../static/imagens/companies/spin.works.png" , email: '', link:'http://www.spinworks.pt/', business_area: '' , partnership_tier:'silver', show_in_website: true, chat_code: 'q4bBi0i2v8BT4OKP', chat_id: 'vGxpqF3c8bgwxuXkX', cvs_access: true},
                         {id: '55', created_at: '2020-01-29 01:28:10.011092', updated_at: '2022-03-17 21:10:32.024142', external_id: 'c3014d62-c7e4-4526-aee6-0bbbd7fad9aa', name: 'Teleperformance', logo: "../../static/imagens/companies/teleperformance.png" , email: '', link:'https://teleperformance.com/en-us/', business_area: '', partnership_tier:'silver', show_in_website: true, chat_code: 'zQOuMMX2yjo1KsRC', chat_id: 'BWtKJ8xQRtkZ4Ku9Z', cvs_access: true},
                         {id: '60', created_at: '2020-02-09 01:05:28.073962', updated_at: '2022-03-17 20:59:33.148834', external_id: 'f0786d8b-0b4d-4b68-9ca6-05c71622f74a', name: 'GMV', logo: "../../static/imagens/companies/real companies/gmv.png" , email: 'acaballero@gmv.com', link:'https://www.gmv.com/pt/', business_area: '', partnership_tier:'silver', show_in_website: true, chat_code: 'uNoUcHliso0LkiIV', chat_id: 'AzMj5am9MWLvpJBAC', cvs_access: false},
                         {id: '86', created_at: '2021-02-28 20:40:04.348945', updated_at: '2022-03-20 22:37:53.373674', external_id: 'ef319d6c-3739-4709-8fc6-25fe2ca7de7d', name: 'Fidelidade - Companhia de Seguros', logo: "../../static/imagens/companies/real companies/fidelidade_-_companhia_de_seguros.png" , email: 'ana.silva.barros@fidelidade.pt', link:'https://www.fidelidade.pt/PT/particulares/Paginas/default.aspx', business_area: 'Seguradora', partnership_tier:'silver', show_in_website: true, chat_code: 'YHgh6gUFxBauacLo', chat_id: 'GwAe6GzAfh3aSrtLi', cvs_access: true},
                         {id: '88', created_at: '2021-02-28 21:54:44.580685', updated_at: '2022-03-17 21:11:42.83857', external_id: 'b765240c-95f3-4f83-af6f-69e69813c3ee', name: 'Slefty', logo: "../../static/imagens/companies/real companies/slefty.png" , email: 'slefty@slefty.com', link:'https://slefty.com/', business_area: '', partnership_tier:' silver', show_in_website: true, chat_code: 'D2iyxkmw3SrHVh5D', chat_id: 'f3ERX2jEAemN32rhq', cvs_access: true},
                         {id: '108', created_at: '2022-03-12 20:56:15.09346', updated_at: '2022-03-20 22:21:46.615943', external_id: '42d1df7b-9b9c-43cc-a276-7fe9951b2c57', name: 'Continental', logo: "../../static/imagens/companies/continental.png" , email: 'mariana.ferreira.alves@conti-engineering.com', link:'https://conti-engineering.com/', business_area: '', partnership_tier: 'silver', show_in_website: true, chat_code: 'd7UZIXowRJaERReG', chat_id: 'EaG6iN5tNwKMJmeEa', cvs_access: false},

            ],
                bronze: [{id: '8', created_at: '2019-09-15 12:35:18.442347', updated_at: '2022-03-17 20:58:32.385907', external_id: '3617985d-9168-4b04-ae4b-42d287040e3d', name: 'EY', logo: "../../static/imagens/companies/ey.png" , email: 'andreia.reis@pt.ey.com', link: 'https://www.ey.com/pt/en', business_area: 'Consulting', partnership_tier:'bronze', show_in_website: true, chat_code: 'O1p0Z0nthAQF0NRH', chat_id:'pRHf2k6LHmqhG6hxc', cvs_access: true},
                         {id: '12', created_at: '2019-09-15 14:13:55.429615', updated_at: '2022-03-17 21:04:27.825226', external_id: '4cb7b58d-497a-4677-bc22-878e1f16a8f8', name: 'Neyond', logo: "../../static/imagens/companies/neyond.png" , email: 'ricardo.senhoraes@epimetheus.pt', link:'https://www.neyond.pt', business_area: 'Consulting', partnership_tier:'bronze', show_in_website: true, chat_code: 'kMv0gcJzD2tYfgvu', chat_id:'dH4kcZcTEEJSP2BFM', cvs_access: true},
                         {id: '16', created_at: '2019-09-15 14:19:14.753848', updated_at: '2022-03-17 20:53:16.442094', external_id: 'd2d54bdb-3dfe-475a-b065-dcd92c8cd501', name: 'Aubay', logo: "../../static/imagens/companies/aubay.png" , email: 'bcoelho@aubay.com', link:'https://www.aubay.pt', business_area: 'Software Consulting', partnership_tier:'bronze', show_in_website: true, chat_code: 'oRMMpEG00gOnnNZ6', chat_id:'45eWXJuQFcp2XTv2s', cvs_access: true},
                         {id: '19', created_at: '2019-09-15 14:21:18.988759', updated_at: '2022-03-20 22:55:23.665526', external_id: '54de1cdc-15ce-4504-9569-3790ef101cf7', name: 'Vodafone Portugal', logo: "../../static/imagens/companies/vodafone_portugal.png" , email: '', link:'https://www.vodafone.pt', business_area: 'Communication', partnership_tier:'bronze', show_in_website: true, chat_code: 'pDQJKEBOWPCUueiW', chat_id: '9inHeRvbt77Nb66vG', cvs_access: true},
                         {id: '20', created_at: '2019-09-15 14:45:51.50573', updated_at: '2022-04-14 14:41:38.625735', external_id: '4eb09010-5920-4459-99a1-d428e24b3e6a', name: 'Adentis Portugal', logo: "../../static/imagens/companies/adentis_portugal.png" , email: '', link:'http://www.adentis.pt/', business_area: ''	, partnership_tier:'bronze', show_in_website: false, chat_code: 'EUMy19kJUd23eKm0', chat_id: 'P5bZaEZxrBEMGkRdF', cvs_access: true},
                         {id: '21', created_at: '2019-09-15 15:22:37.219117', updated_at: '2022-03-20 22:24:27.011423', external_id: 'eaa903fc-dcb2-4886-bcf7-dba6307299bb', name: 'ALTEN Portugal', logo: "../../static/imagens/companies/alten_portugal.png" , email: '', link:'https://www.alten.com/', business_area: '', partnership_tier:'bronze', show_in_website: false, chat_code: 'RTjw96R1uV7CZsZt', chat_id: 'aWQz2YsZybg2PRf33', cvs_access: false},
                         {id: '23', created_at: '2019-09-15 15:23:35.736283', updated_at: '2022-03-17 20:53:42.141731', external_id: 'c223ccbf-b271-47e3-9c50-43099a0dbd64', name: 'BCG', logo: "../../static/imagens/companies/bcg.png" , email: 'Mendia.Rita@bcg.com', link:'https://www.bcg.com/en-pt/default.aspx', business_area: 'Consulting' , partnership_tier:'bronze', show_in_website: true, chat_code: 'qXD9TJtw6TSz8rkr', chat_id: 'ZnZ9Af49aT76AnAPc', cvs_access: false},
                         {id: '24', created_at: '2019-09-15 15:24:12.108986', updated_at: '2022-03-20 22:57:26.137231', external_id: 'fda13dd6-b98d-4da7-a706-3ff09f323111', name: 'CELFINET', logo: "../../static/imagens/companies/real companies/celfinet.png" , email: 'filipa.metelo@celfinet.com', link:'https://www.celfinet.com/', business_area:'', partnership_tier:'bronze', show_in_website: true, chat_code: 'j0bErShxNUSba5Jv', chat_id: 'j3hCXEupWRWRRwcQ2', cvs_access: true},
                         {id: '26', created_at: '2019-09-15 15:25:14.687043', updated_at: '2022-03-20 22:45:13.131802', external_id: '2cee9393-24c0-479f-a903-3f417c414011', name: 'Dellent Consulting', logo: "../../static/imagens/companies/dellent_consulting.png" , email: '', link:'https://dellentconsulting.com/', business_area: '', partnership_tier:'bronze', show_in_website: false, chat_code: 'l6YQ4BTHDaIVox4b', chat_id: 'Fs7tSS3XNT3wxBjNz', cvs_access: false},
                         {id: '28', created_at: '2019-09-15 15:26:06.137332', updated_at: '2022-03-20 22:53:40.138369', external_id: 'f22509d0-2aba-44c8-bd00-316c3c7542b0', name: 'ITSector', logo: "../../static/imagens/companies/itsector.png" , email: 'sofia.videira@itsector.pt', link:'https://www.itsector.pt/pt', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: '7Km4RrxsK4hMVCIm', chat_id: 'yw7cL6AArHWFRidkB', cvs_access: true},
                         {id: '32', created_at: '2019-09-15 15:27:53.02908', updated_at: '2022-03-17 21:06:47.883365', external_id: '7a855746-7e93-4951-9908-5b2be019163e', name: 'REN', logo: "../../static/imagens/companies/real companies/ren.png" , email: 'sara.pereira@ren.pt', link:'https://www.ren.pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: '46eH5LOXGhku54mD', chat_id: 'edTbqgbwoGfFZn2tB', cvs_access: false},
                         {id: '36', created_at: '2019-09-15 15:29:44.016064', updated_at: '2022-04-06 11:26:36.351688', external_id: '7c9aca7b-9cb9-4bc3-a689-0680025bc47b', name: 'VoiceInteraction', logo: "../../static/imagens/companies/voiceinteraction.png" , email: 'mariana.manteiga@voiceinteraction.pt',	link:'https://www.voice-interaction.com/pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: '6rPCCHBlw3Jj6YX9', chat_id: 'vxRi26tt7rJ6aeB4m', cvs_access: true},
                         {id: '50', created_at: '2020-01-29 00:36:25.687229', updated_at: '2022-03-17 20:58:03.128942', external_id: '7894cdbd-e56a-46b8-b0b0-3fe949ab12ca', name: 'EDP', logo: "../../static/imagens/companies/edp.png" , email: 'FILIPA.FERNANDES@edp.com', link:'https://www.edp.com/en', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'Vw3r16W7G8FsZGSF', chat_id: 'bvvLrH6bGmo76iAQx', cvs_access: true},
                         {id: '53', created_at: '2020-01-29 01:01:33.100986', updated_at: '2022-03-17 21:03:04.878805', external_id: '7c9aa7a7-4185-41db-b0dc-8f0f93b66f6c', name: 'ManWinWin', logo: "../../static/imagens/companies/real companies/manwinwin.png" , email: 'Acoutinho@manwinwin.com', link:'https://manwinwin.com/pt/pagina-principal/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'WG7Br8H2UG960wTa', chat_id: 'u8eB2pAQzDSPpGKNb', cvs_access: true},
                         {id: '54', created_at: '2020-01-29 01:23:53.974168', updated_at: '2022-03-17 21:06:05.080857', external_id: '4d4d2eaf-a56a-4cf1-b516-2ebbaa036971', name: 'Productized', logo: "../../static/imagens/companies/productized.png" , email: 'andre@productized.com', link:'https://productized.co/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: '80nhy8RQlIfHyqlz', chat_id: 'swg2i4AwrkjGDhWA2', cvs_access: false},
                         {id: '57', created_at: '2020-01-29 01:39:06.546383', updated_at: '2022-03-17 21:09:04.575328', external_id: '6cdc8518-3875-43c5-9db6-598515fe2078', name: 'Visteon', logo: "../../static/imagens/companies/visteon.png" , email: 'anasofia.sequeira@visteon.com', link:'https://www.visteon.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'mqq1OgQRx9HqC2Zg', chat_id: 'xJiAdqSdc6HbtCPxW', cvs_access: true},
                         {id: '71', created_at: '2020-02-26 00:02:40.928728', updated_at: '2022-04-12 16:19:05.59333', external_id: '45ef5152-52ea-4fb8-a1a6-db646e2771a9', name: 'Noesis', logo: "../../static/imagens/companies/noesis.png" , email: 'Rita.M.Duarte@noesis.pt',	link:'https://www.noesis.pt/pt/homepage', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'a6391cYHqoGjPUod', chat_id: 'DwMNChvhsEtmyoPhc', cvs_access: true},
                         {id: '73', created_at: '2020-02-26 00:12:14.527328', updated_at: '2022-03-20 22:50:34.958582', external_id: '77cccc64-8aea-4329-8437-30ff4045cc03', name: 'Volkswagen Digital Solutions', logo: "../../static/imagens/companies/volkswagen_digital_solutions.png" , email: 'ana.gaspar@vw-dilab.com', link:'https://www.vwds.pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'CIZEzHM5c2DAYMDW', chat_id: 'c5i2jZ9wvCyeQk9Jb', cvs_access: true},
                         {id: '77', created_at: '2020-02-26 00:30:43.907573', updated_at: '2022-03-20 22:51:49.395543', external_id: '41fe47ad-2dfc-46ff-a92c-fdef6acf77a1', name: 'Vision-Box', logo: "../../static/imagens/companies/vision-box.png" , email: 'Joana.Fernandes@vision-box.com', link:'https://www.vision-box.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: '7yNqHOFZqCoVHMu6', chat_id: 'oLALrD9S949sePko6', cvs_access: false},
                         {id: '78', created_at: '2020-03-02 00:37:07.441989', updated_at: '2022-03-20 22:41:12.851871', external_id: 'e5ab6bd3-c947-407b-9d76-af1ecb23825f', name: 'SACYR NEOPUL', logo: "../../static/imagens/companies/sacyr_neopul.png" , email: 'snazeri@sacyr.com', link:'https://www.sacyrinfraestructuras.com/pt/home', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'pZhLYxidewXdceny', chat_id: '5hqadjk7SoxDXqBej', cvs_access: false},
                         {id: '79', created_at: '2020-03-02 01:15:10.905731', updated_at: '2022-03-17 20:58:11.215887', external_id: 'c9b7c7d1-dd37-4c6f-92c5-7fb69dcc1641', name: 'Ericsson', logo: "../../static/imagens/companies/ericsson.png" , email: 'rute.diniz@ericsson.com', link:'https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/portugal', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'JfoDgnlXARbaeyC3', chat_id: 'oH6rye5hcv8z8fqaf', cvs_access: true},
                         {id: '80', created_at: '2020-03-03 02:26:59.641193', updated_at: '2022-03-21 08:29:09.647097', external_id: '3d512067-a162-4d8b-99e6-74764e5481ef', name: 'Oskon.Tech', logo: "../../static/imagens/companies/oskon.tech.png" , email: '', link:'https://oskon.tech/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: '2DU2kg1RlC5zGRHF', chat_id: '2oBKLKxQRu5QfY6xQ', cvs_access: false},
                         {id: '89', created_at: '2021-02-28 21:55:52.336596', updated_at: '2022-03-17 21:11:53.310082', external_id: '6e8b23f0-35e2-45e9-8408-ca431a005456', name: 'Skyline Communications', logo: "../../static/imagens/companies/skyline_communications.png" , email: 'jobs@skyline.be', link:'https://skyline.be/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'dInRWDKnFffa15ii', chat_id: 'pwzQvA3LgzXSxvRF6', cvs_access: true},
                         {id: '90', created_at: '2021-03-04 20:04:28.013188', updated_at: '2022-03-17 21:00:54.329119', external_id: 'cab1ec09-e676-4a8b-86a1-37e225837e36', name: 'Infinera', logo: "../../static/imagens/companies/infinera.png" , email: 'mnina@infinera.com', link:'https://www.infinera.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'xLEWhjQNXrw6GLF3', chat_id: 'XqvAGzyiz4wg65Cxq', cvs_access: true},
                         {id: '92', created_at: '2021-03-07 22:27:44.453553', updated_at: '2022-03-17 21:08:14.49543', external_id: 'f338bf23-a217-4913-ad4b-de036c87f323', name: 'Worten', logo: "../../static/imagens/companies/worten.png" , email: 'caamoreira@worten.pt', link:'https://www.worten.pt/' , business_area: 'https://careers.worten.pt/pt/', partnership_tier:'bronze', show_in_website: true, chat_code: 'RJx5iajWiNVdjuyw', chat_id: 'eQ4iW5yfshxkd3dFe', cvs_access: false},
                         {id: '102', created_at: '2022-03-09 20:38:57.141989', updated_at: '2022-03-20 22:40:28.915434', external_id: '1ccce7d6-b92e-4a8f-b69a-42672873a979', name: 'SISCOG', logo: "../../static/imagens/companies/real companies/siscog.png" , email: 'sandra.teixeira@siscog.pt', link:'https://www.siscog.pt/pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'j2jHM7KunbBWkc0q', chat_id: 'ShYyYuxAYJecNtaX4', cvs_access: true},
                         {id: '109', created_at: '2022-03-12 22:07:28.461422', updated_at: '2022-04-06 11:30:12.203531', external_id: '1626710b-6303-46d9-89e3-84b087593d0e', name: 'QSR', logo: "../../static/imagens/companies/qsr.png" , email: 'mcaeiro@qsr.consulting', link:'https://www.qsr.consulting/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'eodpd3X0jfSo5RyM', chat_id: 'ZWwokcGCYHJiFvrCP', cvs_access: true},
                         {id: '110', created_at: '2022-03-14 00:30:23.622225', updated_at: '2022-03-20 22:32:32.453456', external_id: 'a3360b74-9179-47ff-9bf7-c2b3178af234',	name: 'DataHow', logo: "../../static/imagens/companies/datahow.png" , email: 'g.ramos@datahow.ch', link:'https://www.datahow.ch/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'KNapZik9NI7tVzpH', chat_id: 'BqgntvDBeFt9dwrrH', cvs_access: false},
                         {id: '111', created_at: '2022-03-14 00:35:08.319882', updated_at: '2022-03-20 22:35:23.166564', external_id: '84857745-a7bf-48f7-9ec5-0e8bea50d511',	name: 'Mind Source', logo: "../../static/imagens/companies/mind_source.png" , email: '', link:'https://mindsource.pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'hO0O97ckttViFHOj', chat_id: 'ZHsMWeFHnaDWohDav', cvs_access: true},
                         {id: '112', created_at: '2022-03-14 00:38:35.437311', updated_at: '2022-03-20 22:44:12.272411', external_id: 'f3b12690-3a39-4fee-8347-8dc6058adcb5',	name: 'VILT Portugal', logo: "../../static/imagens/companies/vilt_portugal.png" , email: 'rita.soares@vilt-group.com', link:'https://www.vilt-group.com/pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'JXvjJkOoF2mcFie6', chat_id: 'HTvgpikCc4sChNDZn', cvs_access: false},
                         {id: '113', created_at: '2022-03-14 00:47:27.762701', updated_at: '2022-03-20 22:39:27.489441', external_id: '38058e71-d04b-4b3d-9798-c3b454ed983e',	name: 'Capgemini Engineering', logo: "../../static/imagens/companies/capgemini_engineering.png" , email: '', link:'https://www.capgemini.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'fStZhZVb9lHY43RT', chat_id: 'gcFCwqGMD75jc74tH', cvs_access: true},
                         {id: '114', created_at: '2022-03-14 00:50:30.578761', updated_at: '2022-03-17 20:54:59.922574', external_id: 'baf5374b-c524-4fab-b92c-52a1a86cb577',	name: 'CGI', logo: "../../static/imagens/companies/cgi.png" , email: '', link:'https://www.cgi.com/portugal/pt-pt', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'EtbGkxaKe1JcEF0r', chat_id: 'ngkMDot7tXntktrhR', cvs_access: true},
                         {id: '115', created_at: '2022-03-14 00:52:50.941508', updated_at: '2022-03-20 22:29:32.352058', external_id: 'f9c32286-5850-4d8f-9633-fef944a3f741',	name: 'CEiiA', logo: "../../static/imagens/companies/ceiia.png" , email: '', link:'https://www.ceiia.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'PqtrqA04E8UYAldV', chat_id: 'nKgjf8QKAtaZC4TSq', cvs_access: true},
                         {id: '116', created_at: '2022-03-14 00:54:39.678331', updated_at: '2022-03-20 22:56:25.953226', external_id: '2927ce96-1c5d-45d4-b906-b677ab2d6528',	name: 'Unbabel Lda.', logo: "../../static/imagens/companies/unbabel_lda..png" , email: '', link:'https://unbabel.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'ufbfSuNvPgeEIbwO', chat_id: 'u6Kh5G44yiYGn5hzN', cvs_access: false},
                         {id: '117', created_at: '2022-03-14 00:58:43.711016', updated_at: '2022-03-17 21:09:36.84648', external_id: '40abf777-5a9a-4cfb-a747-61c21a9d728b', name: 'UNICRE', logo: "../../static/imagens/companies/unicre.png" , email: '', link:'https://www.unicre.pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'birBh2peTAZp3Ovg', chat_id: 'CbxWz9EAF9dLYyyHz', cvs_access: true},
                         {id: '119', created_at: '2022-03-14 17:48:47.944888', updated_at: '2022-04-12 13:51:37.236226', external_id: 'd8c2c5f8-c5e7-4205-b671-00913feca9d9',	name: 'Izertis', logo: "../../static/imagens/companies/izertis.png" , email: '', link:'https://www.izertis.com/pt/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'tizq5a1VZjjzWfed', chat_id: 'e3AppgPSdxgRy3Lkn', cvs_access: true},
                         {id: '120', created_at: '2022-03-14 17:50:30.366319', updated_at: '2022-03-17 20:54:01.280878', external_id: 'a4b071c4-a622-40c2-81fb-1f5f6da7f132',	name: 'Bliss Applications', logo: "../../static/imagens/companies/bliss_applications.png" , email: '', link:'https://www.blissapplications.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'NHEHnwp4EvlHSkdJ', chat_id: 'BRZQeWj5ei3fD7Xbz', cvs_access: false},
                         {id: '121', created_at: '2022-03-14 17:58:25.8277', updated_at: '2022-03-20 22:54:20.250496', external_id: '606992c3-a5a5-4b4d-99c4-af7ed3ee0971', name: 'Amaris Consulting', logo: "../../static/imagens/companies/amaris_consulting.png" , email: '', link:'https://www.amaris.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'KXhyyTzc9xT09S6m', chat_id: '3HsXqCDnEYRew36id', cvs_access: false},
                         {id: '127', created_at: '2022-03-20 05:08:09.393064', updated_at: '2022-03-20 05:08:09.393071', external_id: 'b383ddd0-4862-4a51-a76d-6168e24fcbb2', name: 'Deimos Engenharia', logo: "../../static/imagens/companies/deimos_engenharia.jpg" , email: '', link:'https://elecnor-deimos.com/', business_area: '', partnership_tier:'bronze', show_in_website: true, chat_code: 'jXiTGvit2sasgZ5i', chat_id: 'dmPTpTpJ8wmwDkSwW', cvs_access: false},
            ],
                sponsor: [
                          {id: '96', created_at: '2021-03-09 19:44:53.738658', updated_at: '2022-03-17 21:08:08.294154', external_id: 'e5d35098-741e-4341-ac70-82f9f20379d0', name: 'Worten2', logo: "../../static/imagens/companies/worten2.png" , email: '', link:'https://www.worten.pt/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: 'qcgmoEPAESHbVc7J', chat_id: '3FQ8ezfYvRwg3G8ra', cvs_access: false},
                          {id: '136', created_at: '2022-03-27 21:31:15.190311', updated_at: '2022-03-27 21:35:24.779429', external_id: 'c50b2db0-88ac-483e-81b2-31d0ef19f6cf',	name: 'Redbull', logo: "../../static/imagens/companies/redbull.png" , email: 'customerservice@redbullshopus.com', link: 'https://www.redbull.com/pt-pt/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: null, chat_id: null, cvs_access: false},
                          {id: '133', created_at: '2022-03-21 02:47:44.447133', updated_at: '2022-03-21 02:47:44.447138', external_id: '5bc09091-b83c-432b-946b-33d206bb9aa7',	name: 'Sumol Compal', logo: "../../static/imagens/companies/sumol_compal.png" , email: '', link:'https://sumolcompal.pt/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: 'mKP8nbogOXpgnNEU', chat_id: 'FAYtiKStvtipNxiWC', cvs_access: false},
                          {id: '129', created_at: '2022-03-21 02:42:18.95318', updated_at: '2022-03-21 02:42:18.953185', external_id: '53233ea6-b64c-4052-9bd5-e7eb55356aef', name: 'The Coffee Library', logo: "../../static/imagens/companies/the_coffee_library.png" , email: '', link:'https://www.thecoffeelibrary.pt/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: 'zB5Ynkyh5Ad4u6rq', chat_id: 'oMEqYvkNoQNDCCPBu', cvs_access: false},
                          {id: '130', created_at: '2022-03-21 02:44:41.423578', updated_at: '2022-03-21 02:44:41.423585', external_id: '47534ded-6813-458f-af32-8a1a074c3278',	name: 'Odisseias', logo: "../../static/imagens/companies/odisseias.png" , email: '', link:'https://www.odisseias.com/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: 'KyggiWyLjAAVrldd', chat_id: 'TbAsGLkRwMMTHbMyr', cvs_access: false},
                          {id: '131', created_at: '2022-03-21 02:45:22.331964', updated_at: '2022-03-21 02:45:22.33197', external_id: 'ea7adde7-4c22-4cdc-b0bd-730df509ca09', name: 'Hotel Turim Alameda', logo: "../../static/imagens/companies/hotel_turim_alameda.png" , email: '', link:'https://turim-hotels.com/turim-alameda-hotel-pt/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: 'QVjqV3be5nN75QcM', chat_id: 'saA7ap8C3WkKnBXuY', cvs_access: false},
                          {id: '132', created_at: '2022-03-21 02:45:54.602644', updated_at: '2022-03-21 02:45:54.602651', external_id: '5ef4b014-ef88-41cb-9538-c1554c80fb73', name: 'FreeNow', logo: "../../static/imagens/companies/freenow.png" , email: '', link:'https://free-now.com/pt/', business_area: '', partnership_tier:'sponsor', show_in_website: true, chat_code: 'waLPscDhCG5Q1cmK', chat_id: 'E3JuJGpKPGSrFCa9H', cvs_access: false},         
                        ]  

           }
       }
   },

    /* mounted () {
        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=main_sponsor', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
           }
       })
        .then(response => (this.partners.main_sponsor = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=gold', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
           }
       })
        .then(response => (this.partners.gold = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=silver', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
           }
       })
        .then(response => (this.partners.silver = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=bronze', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
           }
       })
        .then(response => (this.partners.bronze = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?partnership_tier=sponsor', {
            auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME, 
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY
           }
       })
        .then(response => (this.partners.sponsor = response.data['data']));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/event", {
            auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
           },
       })
        .then((response) => (this.event = response.data["data"]));
   }*/
}   
</script>

<style>
#speaker-title {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 100px;
}
.partners-app {
    padding-top: 90px;
}
.title-team-image{
    background: linear-gradient(122deg, rgba(107,191, 255, 0.7), rgba(63, 0, 70, 0.7)), url("https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
}

.main-sponsor-logo {
    justify-content: center;
    max-height: 150px;
    max-width: 200px;
    margin: 10px 25px;
    opacity: .85;
    transition: all .2s ease-in-out;
    margin-bottom: 30px;
}

.main-sponsor-logo:hover {
	opacity: 1;
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    transform: scale(1.15); 
}

.image-center-text-comp {
    background: linear-gradient(122deg, rgba(107,191, 255, 0.7), rgba(63, 0, 70, 0.7)), url("https://www.projecttimes.com/media/k2/items/cache/6612da61425d98755836902a8bde1bce_XL.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 50px;
    margin-bottom: 60px;
}

.center-text {
    text-align: center;
    position: relative;
    top: 45%;
    width: 300px;
    color: #ffffff;
    font-family: 'Raleway' sans-serif;
    font-size: 35px;
    letter-spacing: -1px;
    font-weight: bold;
}

@media screen and (max-width: 800px) {
    .main-sponsor {
      max-width: 125px;
      max-height: 88px;
      margin: 5px 8px;
      padding-left: 10px;
 }
}

@media screen and (max-width: 560px) {
  .main-sponsor  {
      max-width: 85px;
      max-height: 60px;
      margin: 3px 5px;
 }
}
</style>
