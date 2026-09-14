import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {servicos,servicoPorSlug} from "@/content/servicos";
import {conversao as c,destaquesServico} from "@/content/conversao";
import {site} from "@/content/site";
import {montarMetadata} from "@/lib/seo";
import {servicoSchema,migalhasSchema,faqSchema} from "@/lib/schema";
import {JsonLd} from "@/components/seo/json-ld";
import {Seta} from "@/components/ui/primitivos";
import {FaixaClientes,EstruturaRf} from "@/components/blocos/conversao";
import {Orcamento} from "@/components/blocos/orcamento";
export const dynamicParams=false;
export function generateStaticParams(){return servicos.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:PageProps<"/servicos/[slug]">):Promise<Metadata>{const {slug}=await params;const s=servicoPorSlug(slug);return s?montarMetadata({titulo:s.tituloSeo,descricao:s.descricaoSeo,caminho:`/servicos/${s.slug}`}):{}}
export default async function PaginaServico({params}:PageProps<"/servicos/[slug]">){const {slug}=await params;const s=servicoPorSlug(slug);if(!s)notFound();const d=destaquesServico[slug];const perguntas=s.faq.filter(q=>!q.resposta.includes("[CONFIRMAR]"));const relacionados=servicos.filter(i=>i.slug!==slug).slice(0,3);return <>
<section className="rf-hero service-hero"><div className="container-rf"><nav className="rf-breadcrumb" aria-label={c.inicio}><Link href="/">{c.inicio}</Link><span>/</span><Link href="/servicos">{c.servicos}</Link><span>/</span><span>{s.nomeCurto}</span></nav><div className="landing-grid"><div><p className="rf-eyebrow">{c.lp.etiqueta}</p><h1>{d.titulo}</h1><p className="hero-description">{d.texto}</p><ul className="landing-checks">{d.resumo.map(t=><li key={t}><span aria-hidden="true">✓</span>{t}</li>)}</ul><div className="rf-actions"><a href="#orcamento" className="rf-button">{c.orcamento}<Seta/></a><a href={site.telefone.href} className="rf-text-link">{site.telefone.exibicao}</a></div></div><figure className="landing-photo"><Image src={s.imagem.src} alt={s.imagem.alt} width={s.imagem.width} height={s.imagem.height} priority sizes="(min-width:1024px) 430px, 90vw"/><figcaption><strong>{s.nomeCurto}</strong><span>{c.lp.licao}</span></figcaption></figure></div><nav className="landing-nav" aria-label={s.nomeCurto}><a href="#entrega">{c.lp.incluido}</a><a href="#processo">{c.lp.processo}</a><a href="#duvidas">{c.lp.faq}</a><a href="#orcamento">{c.orcamento}<Seta/></a></nav></div></section>
<FaixaClientes/>
<section className="rf-section" id="entrega"><div className="container-rf delivery-grid"><div><p className="rf-eyebrow">{c.lp.incluido}</p><h2>{c.lp.entrega}</h2><p className="rf-lead">{c.lp.nota}</p><a href="#orcamento" className="rf-text-link">{c.lp.perguntar}<Seta/></a></div><ul className="delivery-list">{s.beneficios.filter(x=>!x.includes("[CONFIRMAR]")).map(b=><li key={b}><span aria-hidden="true">✓</span><p>{b}</p></li>)}</ul></div></section>
<section className="rf-section rf-surface" id="processo"><div className="container-rf"><p className="rf-eyebrow">{c.lp.processo}</p><h2>{c.lp.etapas}</h2><ol className="process-grid">{s.processo.map((p,i)=><li key={p.titulo}><span className="process-number">{String(i+1).padStart(2,"0")}</span><h3>{p.titulo}</h3><p>{p.texto}</p></li>)}</ol></div></section>
<EstruturaRf/>
<section className="rf-section rf-surface"><div className="container-rf"><p className="rf-eyebrow">{c.lp.aplicacoes}</p><h2>{c.lp.aplicacoesTitulo}</h2><div className="application-grid">{s.aplicacoes.map(a=><article key={a.titulo}><h3>{a.titulo}</h3><p>{a.texto}</p></article>)}</div>{s.specs.length>0&&<details className="spec-details"><summary>{c.lp.especificacoes}</summary><p>{c.lp.specNota}</p><dl>{s.specs.map(sp=><div key={sp.rotulo}><dt>{sp.rotulo}</dt><dd>{sp.valor}</dd></div>)}</dl></details>}</div></section>
<section className="rf-section" id="duvidas"><div className="container-rf faq-grid"><div><p className="rf-eyebrow">{s.nomeCurto}</p><h2>{c.lp.faq}</h2><a href="#orcamento" className="rf-text-link">{c.falar}<Seta/></a></div><div className="rf-faq">{perguntas.map(q=><details key={q.pergunta}><summary>{q.pergunta}</summary><p>{q.resposta}</p></details>)}</div></div></section>
<Orcamento servicoInicial={s.nomeCurto}/>
<section className="rf-section"><div className="container-rf"><h2>{c.lp.relacionados}</h2><div className="secondary-services">{relacionados.map(r=><Link key={r.slug} href={`/servicos/${r.slug}`}><div><h3>{r.nomeCurto}</h3><p>{r.resumo}</p></div><Seta/></Link>)}</div></div></section>
<JsonLd data={servicoSchema(s)}/><JsonLd data={migalhasSchema([{nome:c.inicio,caminho:"/"},{nome:c.servicos,caminho:"/servicos"},{nome:s.nomeCurto,caminho:`/servicos/${slug}`}])}/>{perguntas.length>=2&&<JsonLd data={faqSchema(perguntas)}/>}</>;}
