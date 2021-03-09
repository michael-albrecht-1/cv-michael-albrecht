import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Technicien support chez Odéis (éditeur ERP)</h4>
                <h5>depuis 2016</h5>
                 <ul>
                     <li><i className="fas fa-check-square"></i>Prise d'appels, gestion des tickets d'incident</li>
                     <li><i className="fas fa-check-square"></i>Testing</li>
                     <li><i className="fas fa-check-square"></i>Démonstrations</li>
                     <li><i className="fas fa-check-square"></i>Installation/formation client</li>
                     <li><i className="fas fa-check-square"></i>Spécialité: gestion d'un connecteur vers Prestashop</li>
                 </ul>
            </div>
            <div className="exp-2">
                <h4>Auto-entrepreneur en sous-traitance pour GlobalSOFT</h4>
                <h5>2014-2016</h5>
                <ul>
                    <li><i className="fas fa-check-square"></i>Formation client (Burger King, Mc Donald, .. )</li>
                    <li><i className="fas fa-check-square"></i>Installation</li>
                    <li><i className="fas fa-check-square"></i>Dépannage</li>
                </ul>
            </div>
            <div className="exp-3">
                <h4>Technicien support chez GlobalSOFT</h4>
                <h5>2009-2014</h5>
                <ul>
                    <li><i className="fas fa-check-square"></i>Prise d’appels, gestion de tickets d’incidents sur CRM</li>
                    <li><i className="fas fa-check-square"></i>Démonstrations</li>
                    <li><i className="fas fa-check-square"></i>Gestion commerciale sur Sage (devis clients et suivi des documents)</li>
                    <li><i className="fas fa-check-square"></i>Préparation et expédition des commandes clients</li>
                    <li><i className="fas fa-check-square"></i>Installation/ formation sur les matériels/logiciels</li>
                    <li><i className="fas fa-check-square"></i>Gestion des stocks fournisseurs</li>
                    <li><i className="fas fa-check-square"></i>SAV</li>
                    <li><i className="fas fa-check-square"></i>Mise en place et administration d’une base de connaissances</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;