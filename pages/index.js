import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catiamamba | O Resgate das Araucárias</title>
        <meta name="description" content="Narrativa RPG" />
        <link rel="icon" href="/redcardinal.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.bloco}>

            <h1>Catiamamba</h1>
            <p >RPG <span className='destaque'>Jaguareté: O Encontro</span></p>
            <p >Aventura <span className='destaque'>O Resgate das Araucárias</span></p>
            <p >Jogado por <span className='destaque'>Richard Deluca</span></p>
            <p >Narrado por <span text='Domenico' className='destaque'>Mingo</span></p>

          </div>
          <Image alt='imagem de um pássaro vermelho' src='/redcardinal.svg' width={150} height={150} />
        </div>
        < div className={styles.content}>
          <div className={styles.bloco1}>

            <div className={styles.marcador} >
              <p data-aos-offset="200" data-aos="fade-up"
                data-aos-duration="3000">Lá no alto das árvores ela podia ser vista. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Sua cor parecia a de um <span data-aos-delay="1000" data-aos='fade' data-aos-duration="2000" className={styles.sangue}>pôr do sol sangrento</span>. </p>
            </div>

            <div className={styles.marcador} >
              <p data-aos="fade-up"
                data-aos-duration="3000">Nenhuma flecha a alcançava. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Nenhuma mão humana a segurava. </p>
            </div>

            <div className={styles.marcador} >
              <p data-aos="fade-up"
                data-aos-duration="3000"> Não porque era mais rápida ou mais forte que os outros bichos, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> mas porque todos os povos a respeitavam. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> Sabiam de sua importância. </p>
            </div>

            <div className={styles.marcador} >
              <p data-aos="fade-up"
                data-aos-duration="3000"> Se estivessem em região desconhecida </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> e não soubessem onde achar árvore frutífera, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> seguiam tal pássaro. </p>
            </div>

            <div className={styles.marcador2} >
              <p data-aos="fade"
                data-aos-delay="2000" data-aos-duration="2000"> Era <span className={styles.strong}> Catiamamba</span>. </p>
            </div>

            <div className={styles.marcador} >
              <p data-aos="fade-up"
                data-aos-duration="3000"> Diziam os mais antigos, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000"> Catiamamba foi criança.</p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> Desobedecendo os mais velhos, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">saia sozinha para a mata </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> à procura de doces frutas. </p>
            </div>

            <div className={styles.marcador} >
              <p data-aos="fade-up"
                data-aos-duration="3000"> Um dia a criança se perdeu e, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">ninguém sabe como, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> se tornou esse bonito pássaro, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">entre tantos cortejado. </p>
            </div>

            <div className={styles.marcador2} >
              <p data-aos="fade-up"
                data-aos-duration="3000"> É por tantos protegido da caça </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">por indicar onde mora a colheita boa. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> Mas não se enganem: </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">por vezes o pássaro, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> por inveja ou outra coisa qualquer,</p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> faz as pessoas se perderem na mata </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> para nunca mais se acharem. </p>
            </div>



            <div className={styles.marcador} >
              <p data-aos="fade-up"
                data-aos-duration="3000">Catiamamba é isso: </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">uma criança, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">um ser espiritual, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">aquele pássaro ali empoleirado </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">e aquele outro voando. </p>
            </div>
            <div className={styles.marcador} >
              <p data-aos="fade"
                data-aos-delay="2000" data-aos-duration="2000">Catiamamba eu sou</p>
            </div>

          </div>

          <div className={styles.bloco2}>

            <div className={styles.marcador} ><p data-aos="fade-up"
              data-aos-duration="3000">Numa noite, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">enquanto dormia numa árvore, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                algo esquisitão aconteceu. </p>
            </div>

            <div className={styles.marcador} ><p data-aos="fade-up"
              data-aos-duration="3000" className={styles.light_blue}>Luzes azuis rodopiando surgiram </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                e reuniram pessoas diferentes, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                curiosas para vê-las. </p>
            </div>

            <div className={styles.marcador} ><p data-aos="fade-up"
              data-aos-duration="3000">
              Ali se juntavam para solucionar um terrível mistério, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                o sumiço dos pinhões, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                principal alimento dos povos da região </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                elemento de ritos e cerimônias.</p>
            </div>

            <div className={styles.marcador} ><p data-aos="fade-up"
              data-aos-duration="3000">A luz se desfez, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                deixando um segredo a cada um. </p>
            </div>

            <div className={styles.marcador} ><p data-aos="fade-up"
              data-aos-duration="3000">
              Em volta da fogueira </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">sentamos nós, espectadores</p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                compartilhando um pouco de cada. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                Potira, Kumi, Iberê, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                Naru, Nena, Dorni, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                Karakarapu, Oliver, Wilson. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">
                Nos unimos por um bem maior.</p>
              {/* <Image className={styles.centered} alt='campfire' src='/campfire.svg' width={500} height={500} /> */}
            </div>
          </div>
          <div className={styles.bloco3}>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000" id={styles.zip} className={styles.centered}>ZIP ZIP ZAP</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Uma flecha cantava aos ventos</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">nos guiando pela mata. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">ZIP para prosseguir junto às coisas naturais, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">ZAP para desviar das rochas </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">e da gente estrangeira.</p>
            </div>

          </div>
          <div className={styles.bloco4}>
            <p data-aos="fade-up"
              data-aos-duration="3000">Em frente à Garganta </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">do Diabo nos encontramos. </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">Paciente e vigilante do lado de fora, </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">vi meus companheiros se entregarem à digestão </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">para depois serem escarrados </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">humilhados e machucados.</p>

            <p data-aos="fade-up"
              data-aos-duration="3000">Com os olhos de mil pássaros, </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">vi armadilha de gente, </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">cabana de branco </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">a que chamam capela. </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">Lá fomos ao </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">feito padre </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">bondoso e curandeiro </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">O homem que ali estava </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">se revelou predador. </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">Escapamos mais sabidos.</p>
          </div>
          <div className={styles.bloco5}>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Em nossa busca, </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">aos espíritos ancestrais </p>
              <p data-aos="fade-up"
                data-aos-duration="3000"> recorremos. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Sempre NÓS </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Nunca EU</p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Ritual poderoso usamos</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">de baixo da água adentramos</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Unidos, no mundo do sono </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">mergulhamos. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Para prosseguir, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">a palavra <span className={styles.nao}>não</span> </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">se apagou de nossa boca. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">De <span className={styles.onca}>onça</span> a <span className={styles.urso}>urso</span> </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">encontramos também duas crianças kalapalo, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">por nós então libertas. </p>
            </div>

            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Saindo do fundo </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">do rio feito névoa, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">nós seguimos nosso rumo</p>

              <p data-aos="fade-up"
                data-aos-duration="3000"> e elas o delas.</p>
            </div>
          </div>
          <div className={styles.bloco6}>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Os pinhões ausentes </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e a fome batia. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Um macaco caçado </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">por misericórdia pediu. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Nos mostrou dois bebês </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">em troca de sua vida. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Eram filhas duma Mulher </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">que já não tinha </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">povo nem nome </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e que engravidou dum branco </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e de Jaguareté.</p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Por nosso grupo foram educadas </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e rapidamente cresciam. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Contei a elas que </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">ao encararem escolhas difíceis </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">deveriam seguir o que </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">o sopro interior lhes dizia; </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">que meu caminho era encontrar </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">um lar que já não existia; </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">que minha missão era, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">como iangrê e maracá, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">cuidar da floresta e do espírito. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Era minha escolha</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e meu destino</p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Cada história, cada escolha, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">cada ensinamento dado,</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">
                cada exemplo feito,</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">
                as fazia amadurecer.</p>
            </div>
          </div>
          <div className={styles.bloco7}>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Encontramos Jaguareté. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Em presença dele </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e com o sumiço de tantos pássaros vermelhos, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">virei osso, pele e carne. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">garras com mãos,</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">
                pés no chão,</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">
                tamanho de criança, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">
                força de adulto,</p>

              <p data-aos="fade-up"
                data-aos-duration="3000">
                quase gente</p>


            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Dele tomamos uma bebida </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">que nos deu velocidade. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Procuramos a Mulher.</p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Na garganta do diabo a encontramos. </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Ela nos revelou tudo: </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">a bebida de jaguareté </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">era sangue venenoso; </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">fugiu do jaguareté, uma criatura grosseira; </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">fugiu de seu povo por divergir de sua cultura; </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Abominava o ritual da menina moça;  </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">sequestrou os pinhões por causa disso. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Ou esse rito acabava ou </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">o mundo acabava sem pinhões;</p>
              <p data-aos="fade-up"
                data-aos-duration="3000">Seguimos. </p>
            </div>
          </div>
          <div className={styles.bloco8}>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Encontramos sapos que nos vacinaram </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">contra o veneno da onça. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Seus dilemas éticos nutriram as duas garotas. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Maduras, elas decidem rejeitar o ritual da menina moça </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e fundar um novo povo só de mulheres </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">que,  </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">similar aos jesuítas solitários,  </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">não iam se casar.</p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">As mulheres se separaram dos homens </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e geraram seu próprio povo, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">o que gerou revolta </p>
              <p data-aos="fade-up"
                data-aos-duration="3000">e rebuliço. </p>
            </div>
            <div className={styles.marcador}>

              <p data-aos="fade-up"
                data-aos-duration="3000">Sangue estava para rolar, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">mas a conversa falou mais alto. </p>
            </div>
            <div className={styles.marcador}>
              <p data-aos="fade-up"
                data-aos-duration="3000">Um acordo foi feito. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">As mulheres não voltariam para suas tribos </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">nem engravidariam. </p>
            </div>
            <div className={styles.marcador}>
              <p data-aos="fade-up"
                data-aos-duration="3000">Tal como as rãs, os bebês nasceriam em árvores, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">assegurando a descendência dos povos. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">A árvore escolhida, araucária. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Os homens seriam guiados para ela no tempo certo </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e depositariam as suas sementes. </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">Um ritual em conjunto </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">tempos depois se seguiria, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">e do corte da árvore muitas crianças nasceriam. </p>
            </div>
            <div className={styles.marcador}>
              <p data-aos="fade-up"
                data-aos-duration="3000">Me comprometi a guiar os homens </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">às árvores no tempo certo.</p>
            </div>
            <div className={styles.marcador}>
              <p data-aos="fade-up"
                data-aos-duration="3000">A Mulher, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">aquela Mulher, </p>

              <p data-aos="fade-up"
                data-aos-duration="3000">se agradou com a solução</p>
              <p data-aos="fade-up"
                data-aos-duration="3000">e libertou os pinhões. </p>
            </div>
          </div>
          <div className={styles.bloco9}>

            <p data-aos="fade-up"
              data-aos-duration="3000">Uma gralha azul surgiu </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">para anunciar a boa nova. </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">Eu finalmente pude voltar </p>

            <p data-aos="fade-up"
              data-aos-duration="3000">às copas das árvores. </p>

            <Image data-aos="fade"
              data-aos-delay="2000" data-aos-duration="3000" alt='pássaro vermelho' src='/red-bird.svg' width={200} height={200} />
            <Image data-aos="fade"
              data-aos-delay="4000" data-aos-duration="3000" id={styles.blue_bird} alt='pássaro azul' src='/blue-bird.svg' width={240} height={240} />
            {/* <Image data-aos="fade"
              data-aos-delay="2000" data-aos-duration="3000" id={styles.araucaria} alt='araucária' src='/araucaria.svg' width={800} height={800} /> */}
          </div>
        </div>

      </main >


    </div >
  )
}
