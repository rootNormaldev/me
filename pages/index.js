import Head from 'next/head'
import styles from '../styles/Home.module.css'
import{ Card,Text,Grid,Image,Spacer,Link} from '@nextui-org/react'
import { VscGithubInverted } from 'react-icons/vsc'
import { BsFacebook } from 'react-icons/bs'
export default function Home() {
  return (
    <div>
     <Head>
     <title>root@normaldev</title>
     <link rel="icon" type="image/x-icon" href="https://i.joylada.net/18500246/writer/607e69719c068f0001b97d02/60c71b5366f92c0001f78df3/60c71b5366f92c0001f78e85-6c63d0f4-adee-4b93-adbc-4911582237c3.jpg/thumbnail?h=700"/>
     </Head>
     <Grid.Container justify='center'>
     <Grid css={{pt:'$5xl'}}>
     <Link href='https://www.facebook.com/profile.php?id=100085114515029'>
     <Image
     src={"https://png.pngtree.com/png-clipart/20201106/ourlarge/pngtree-cartoon-character-face-squinting-smile-expression-png-image_2387175.jpg"}
     objectFit='scale-down'
     width={320}
     height={320}
     alt='normaldev'
     css={{borderRadius:'$rounded'}}
     />
     </Link>
     <Spacer y={2}/>
     <Text css={{pl:'$2xl'}} className={styles.font_thai} b>root@normaldev</Text>
     <Spacer y={0}/>
     <Text css={{pl:'$2xl'}} className={styles.font_thai} b>ขอใส่ชุดวอมได้มุ้ยก๊าบๆ🤍</Text>
     </Grid>
     </Grid.Container>
     <Grid.Container justify='center'>
     <Grid css={{pt:'$6xl'}}>
     <Text b className={styles.font_thai}>Copyright © 2022 By Normaldev</Text>
     </Grid>
     </Grid.Container>
    </div>
  )
}
