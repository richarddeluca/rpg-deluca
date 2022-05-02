import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import 'aos/dist/aos.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catiamamba | das Araucárias</title>
        <meta name="description" content="Narrativa RPG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <div className={styles.title}>
          <div className={styles.bloco}>

            <h1>Catiamamba</h1>
            <p>RPG <span className='destaque'>Jaguareté: O Encontro</span></p>
            <p>Aventura <span className='destaque'>O Resgate das Araucárias</span></p>
            <p>Jogado por <span className='destaque'>Richard Deluca</span></p>
            <p>Narrado por <span className='destaque'>Mingo</span></p>

          </div>
        </div>
        <div className={styles.content}>
          <div data-aos="fade-up"
            data-aos-duration="3000" className={styles.bloco}>
            <p>Lá no alto das árvores ela podia ser vista. </p>
            <p>Sua cor parecia a de um por do sol sangrento. </p>
            <p>Nenhuma flecha à alcançava. </p>
            <p>Nenhuma mão humana a segurava. </p>
            <p data-aos="fade-up"
              data-aos-duration="3000"> Não porque era mais rápida ou mais forte que os outros bichos, </p>
            <p data-aos="fade-up"
              data-aos-duration="3000"> mas porque todos os povos a respeitavam. </p>
            <p> Sabiam de sua importância. </p>
            <p> Se estivessem em região desconhecida e não soubessem onde achar árvore frutífera, </p>
            <p> seguiam tal pássaro. Era catiamamba. </p>
            <p> Diziam os mais antigos que catiamamba foi uma criança</p>
            <p> que, desobedecendo os mais velhos, saia sozinha </p>
            <p> para a mata fechada à procura de frutas doces. </p>
            <p> Um dia a criança se perdeu e, ninguém sabe como, </p>
            <p> se tornou esse pássaro bonito. </p>
            <p> É por tantos protegido da caça para indicar onde mora a colheita boa. </p>
            <p> Mas não se enganem: por vezes o pássaro </p>
            <p> por inveja ou outra coisa qualquer</p>
            <p> faz as pessoas se perderem na mata para nunca mais se acharem. </p>
            <p > Seu principal alimento é o pinhão.</p>
          </div>
          <div >
            <p>Catiamamba é isso: </p>
            <p>uma criança, </p>
            <p>um ser espiritual, </p>
            <p>aquele pássaro ali empoleirado </p>
            <p>e aquele outro voando. </p>
            <p>Catiamamba eu sou</p>
          </div>

          <div><p>Um dia, enquanto dormia numa árvore, algo esquisitão aconteceu. Luzes azuis rodopiando surgiram e reuniram pessoas diferentes, curiosas. Ali se juntavam para solucionar um terrível mistério, o sumiço dos pinhões, principal alimento dos povos da região e parte importante de cerimônias.</p></div>

          <div><p>A luz se desfez, deixando um segredo a cada um. Em volta da fogueira se sentaram os espectadores e compartilharam um pouco de si. Potira, Kumi, Iberê, Naru, Nena, Dorni, Karakarapu Oliver, Wilson e Catiamamba se uniam por um bem maior.</p></div>

          <div><p>zip zip zap. Uma flecha cantava aos ventos nos guiando pela mata. Zip para prosseguir junto às coisas naturais, zap para desviar das rochas e da gente estrangeira.</p></div>

          <div><p>Em frente a Garganta do Diabo nos encontramos. Paciente e vigilante do lado de fora, vi meus companheiros se entregarem à digestão para depois serem escarrados machucados.</p></div>

          <div><p>Com os olhos de mil pássaros, vi Potira entrar em armadilha de gente, cabana de branco a que chamam capela. Lá fomos. Feito padre bondoso e curandeiro, o homem que ali estava se revelou predador. Fugimos.</p></div>

          <div><p>Procurando respostas, com um ritual simples e poderoso unidos adentramos de baixo da água no mundo do sono. Para prosseguir, a palavra não sumiu de nossa boca. De onça a urso encontramos também duas crianças kalapalo, por nós então libertas. Saindo do fundo do rio feito névoa, elas seguiram seu rumo e nós o nosso.</p></div>

          <div><p>Os pinhões ausentes e a fome batia. Um macaco caçado por misericórdia pediu. Nos mostrou dois bebês em troca de sua vida. Eram filhas duma Mulher que já não tinha povo nem nome e que engravidou dum branco e de Jaguareté.</p></div>

          <div><p>Por nosso grupo foram educadas e rapidamente cresciam. Contei a elas que em escolhas difíceis deveriam seguir o que o sopro interior lhes dizia; que meu caminho era encontrar um lar que já não existia; que minha missão era, como iangrê e maracá, cuidar da floresta e do espírito. Cada história, cada escolha, cada ensinamento as fazia amadurecer.</p></div>

          <div><p>Encontramos Jaguareté. Em presença dele e com o sumiço de tantos pássaros vermelhos, virei osso, pele e carne. Dele tomamos uma bebida que nos deu velocidade e força. Procuramos a Mulher.</p></div>
          <div><p>Na garganta do diabo, encontramos a Mulher sem nome. </p></div>
          <div><p>Ela nos revelou tudo: a bebida de jaguareté era sangue venenoso; fugiu do jaguareté, uma criatura grosseira; fugiu de seu povo por divergir de sua cultura; Abominava o ritual da menina moça;  sequestrou os pinhões por causa disso; ou esse rito acabava ou o mundo acabava sem pinhões;</p></div>

          <div><p>Seguimos. Encontramos sapos que nos vacinaram contra o veneno. Seus dilemas éticos nutriram as duas garotas. Maduras, elas decidem rejeitar o ritual da menina moça e fundar um novo povo só de mulheres que, similar aos jesuítas solitários, não iam se casar.</p></div>
          <div><p>Contamos a história das indígenas guerreiras, depois chamadas de amazonas.</p></div>
          <div><p>As mulheres dos povos se separaram dos homens e geraram seu próprio povo, o que gerou revolta. Sangue estava para rolar, mas a conversa falou mais alto. Um acordo foi feito. As mulheres não voltariam para suas tribos nem engravidariam. Tal como as rãs, os bebês nasceriam em árvores, assegurando a descendência dos povos. A árvore escolhida, araucária. Os homens seriam guiados para ela no tempo certo e depositariam as suas sementes. Um ritual em conjunto tempos depois se seguiria, e do corte da árvore nasceriam muitas crianças. Me comprometi a guiar os homens às árvores no tempo certo.</p></div>
          <div><p>A Mulher gostou e libertou os pinhões. Uma gralha azul surgiu para anunciar a boa nova. Eu finalmente pude voltar às copas das árvores. </p></div>
        </div>

      </main> */}


    </div>
  )
}
