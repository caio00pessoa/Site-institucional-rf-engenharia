import Image from "next/image";
import Link from "next/link";
import { conversao as c } from "@/content/conversao";
import { site } from "@/content/site";
import { FaixaClientes, Provas, EstruturaRf, CtaOrcamento } from "@/components/blocos/conversao";
import { Seta } from "@/components/ui/primitivos";
import { GradeServicos } from "@/components/blocos/grade-servicos";
import { montarMetadata } from "@/lib/seo";
export const metadata=montarMetadata({titulo:"Ancoragem, Linha de Vida e Locação de Balancim",descricao: c.hero.texto,caminho:"/"});
export default function Home(){return <>
<section className="rf-hero"><div className="container-rf hero-grid"><div className="hero-copy"><p className="rf-eyebrow">{c.hero.etiqueta}</p><h1>{c.hero.titulo}<br/><span>{c.hero.destaque}</span></h1><p className="hero-description">{c.hero.texto}</p><div className="rf-actions"><Link className="rf-button" href="/contato#orcamento">{c.orcamento}<Seta/></Link><Link className="rf-text-link" href="#servicos">{c.verServicos}<Seta/></Link></div><p className="hero-note">{c.hero.apoio}</p></div><figure className="hero-visual"><div className="hero-photo"><Image src={c.hero.imagem} alt={c.hero.alt} fill priority sizes="(min-width:1024px) 490px, 90vw" className="object-cover"/></div><div className="photo-cert"><span className="cert-icon" aria-hidden="true">✓</span><div><strong>{c.hero.selo}</strong><span>{c.hero.seloTexto}</span></div></div><figcaption>{c.hero.legenda}</figcaption></figure></div><Provas/></section>
<FaixaClientes/>
<GradeServicos/>
<EstruturaRf/>
<section className="rf-section rf-audience"><div className="container-rf"><p className="rf-eyebrow">{c.publico.etiqueta}</p><h2>{c.publico.titulo}</h2><div className="audience-grid">{c.publico.itens.map((i)=><article key={i.titulo}><h3>{i.titulo}</h3><p>{i.texto}</p><Link href="/contato#orcamento">{c.falar}<Seta/></Link></article>)}</div></div></section>
<section className="rf-section"><div className="container-rf region-grid"><div><p className="rf-eyebrow">{c.atendimento.etiqueta}</p><h2>{c.atendimento.titulo}</h2><p className="rf-lead">{c.atendimento.texto}</p><Link className="rf-text-link" href="/onde-atuamos">{c.atendimento.link}<Seta/></Link></div><div className="region-list">{c.pracasHome.map((p)=><Link key={p.slug} href={`/onde-atuamos/${p.slug}`}><div><small>{p.uf}</small><h3>{p.cidade}</h3></div><Seta/></Link>)}<a href={site.telefone.href}><div><small>{c.formulario.telefone}</small><strong>{site.telefone.exibicao}</strong></div><Seta/></a></div></div></section>
<CtaOrcamento/>
</>}
