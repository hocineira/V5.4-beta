&apos;use client&apos;

import { Shield, Calendar, ArrowLeft, ExternalLink, FileText, AlertTriangle, Check, Scale } from &apos;lucide-react&apos;
import { Button } from &apos;../../../components/ui/button&apos;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from &apos;../../../components/ui/card&apos;
import { Badge } from &apos;../../../components/ui/badge&apos;
import Link from &apos;next/link&apos;

export default function VeilleJuridiquePage() {
  const rgpdTopics = [
    {
      id: 1,
      title: &apos;RGPD et Cybersécurité : Obligations en 2025&apos;,
      description: &apos;Les nouvelles exigences du RGPD concernant la cybersécurité et la protection des données personnelles.&apos;,
      content: [
        &apos;Notification des violations dans les 72h maximum&apos;,
        &apos;Analyses d\&apos;impact sur la protection des données (AIPD) obligatoires&apos;,
        &apos;Mesures de sécurité techniques par défaut (Privacy by Design)&apos;,
        &apos;Formation obligatoire du personnel aux risques cyber&apos;,
        &apos;Documentation des mesures de sécurité mises en place&apos;
      ],
      lastUpdate: &apos;2025-01-15&apos;,
      importance: &apos;Critique&apos;,
      sector: &apos;Toutes entreprises&apos;,
      icon: Shield,
      color: &apos;red&apos;
    },
    {
      id: 2,
      title: &apos;Droits des utilisateurs et conformité&apos;,
      description: &apos;Guide complet sur les droits des utilisateurs et les nouvelles obligations des entreprises en matière de transparence.&apos;,
      content: [
        &apos;Droit à l\&apos;oubli numérique et effacement des données&apos;,
        &apos;Portabilité des données entre services&apos;,
        &apos;Consentement explicite et granulaire requis&apos;,
        &apos;Délégué à la protection des données (DPO) obligatoire&apos;,
        &apos;Information claire sur l\&apos;utilisation des données&apos;
      ],
      lastUpdate: &apos;2024-12-20&apos;,
      importance: &apos;Élevée&apos;,
      sector: &apos;Services numériques&apos;,
      icon: Check,
      color: &apos;blue&apos;
    },
    {
      id: 3,
      title: &apos;Sanctions et amendes RGPD : Évolution 2025&apos;,
      description: &apos;Évolution des sanctions appliquées par la CNIL et les autorités européennes, avec les derniers cas d\&apos;école.&apos;,
      content: [
        &apos;Amendes pouvant atteindre 4% du chiffre d\&apos;affaires mondial&apos;,
        &apos;Sanctions administratives renforcées et ciblées&apos;,
        &apos;Contrôles inopinés plus fréquents dans tous les secteurs&apos;,
        &apos;Coopération renforcée entre autorités nationales européennes&apos;,
        &apos;Nouvelles procédures accélérées pour les violations graves&apos;
      ],
      lastUpdate: &apos;2024-11-30&apos;,
      importance: &apos;Critique&apos;,
      sector: &apos;Toutes entreprises&apos;,
      icon: AlertTriangle,
      color: &apos;red&apos;
    }
  ]

  const getImportanceColor = (importance) => {
    switch (importance) {
      case &apos;Critique&apos;: return &apos;bg-red-100 text-red-800 border-red-200&apos;
      case &apos;Élevée&apos;: return &apos;bg-orange-100 text-orange-800 border-orange-200&apos;
      default: return &apos;bg-blue-100 text-blue-800 border-blue-200&apos;
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(&apos;fr-FR&apos;, {
      year: &apos;numeric&apos;,
      month: &apos;long&apos;,
      day: &apos;numeric&apos;
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          {/* Back Button */}
          <Link href="/veilles">
            <Button variant="outline" className="mb-8 hover:bg-indigo-50 text-slate-700 border-slate-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux veilles
            </Button>
          </Link>

          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Veille Juridique RGPD
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Évolutions et obligations du Règlement Général sur la Protection des Données. 
              Restez conforme avec les dernières exigences européennes et françaises.
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 text-sm border border-indigo-200">
                <Scale className="w-4 h-4 mr-2" />
                3 sujets traités
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm border border-purple-200">
                <Calendar className="w-4 h-4 mr-2" />
                Mis à jour 2025
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* RGPD Topics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {rgpdTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <Card key={topic.id} className="group hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex items-center gap-4 mb-3 md:mb-0">
                        <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-7 h-7 text-indigo-600" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <Badge className={getImportanceColor(topic.importance)} variant="outline">
                            {topic.importance}
                          </Badge>
                          <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-300">
                            {topic.sector}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Mis à jour le {formatDate(topic.lastUpdate)}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
                      {topic.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed mb-6">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-1 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">
                          Points clés de conformité :
                        </h4>
                        <ul className="space-y-3">
                          {topic.content.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-indigo-900">Niveau :</span>
                          <p className="text-indigo-700">{topic.importance}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">Secteur :</span>
                          <p className="text-indigo-700">{topic.sector}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-indigo-900">Dernière MAJ :</span>
                          <p className="text-indigo-700">{formatDate(topic.lastUpdate)}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ressources utiles
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card 
              className="text-center hover:shadow-lg transition-shadow border border-slate-200 cursor-pointer transform hover:-translate-y-1"
              onClick={() => window.open(&apos;https://www.cnil.fr/fr&apos;, &apos;_blank&apos;)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Documentation CNIL</CardTitle>
                <CardDescription className="text-slate-600">
                  Guides officiels et modèles de conformité.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="text-center hover:shadow-lg transition-shadow border border-slate-200 cursor-pointer transform hover:-translate-y-1"
              onClick={() => window.open(&apos;https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679&apos;, &apos;_blank&apos;)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Jurisprudence</CardTitle>
                <CardDescription className="text-slate-600">
                  Décisions récentes et cas d&apos;usage pratiques.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card 
              className="text-center hover:shadow-lg transition-shadow border border-slate-200 cursor-pointer transform hover:-translate-y-1"
              onClick={() => window.open(&apos;https://www.cnil.fr/fr/les-sanctions-prononcees-par-la-cnil&apos;, &apos;_blank&apos;)}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg text-slate-900">Alertes</CardTitle>
                <CardDescription className="text-slate-600">
                  Dernières sanctions et évolutions réglementaires.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Besoin d&apos;accompagnement RGPD ?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Questions sur la conformité RGPD, audit de vos pratiques ou mise en place 
            de processus de protection des données ? N&apos;hésitez pas à me contacter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              onClick={() => window.location.href = &apos;mailto:hocineira@gmail.com&apos;}
            >
              Me contacter
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/veilles">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Retour aux veilles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}